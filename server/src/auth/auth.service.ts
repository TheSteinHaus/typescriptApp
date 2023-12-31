import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from '../users/users.model';
import {v4 as uuid4} from 'uuid'

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        const token = this.generateToken(user)
        console.log(token)
        return {token: (await token).token, login: user.login}
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('Пользователь с таким Email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword, id: uuid4()})
        console.log(user)
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {email: user.email}
        return {token: this.jwtService.sign(payload)}
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        if (user) {
            const passwordEquals = await bcrypt.compare(userDto.password, user.password)
            if (passwordEquals) {
                return user;
            }
        }
        throw new UnauthorizedException({message: 'Неверный email или пароль'})
    }
}
