import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import {JwtModule} from '@nestjs/jwt'
import {HttpModule} from '@nestjs/axios'

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        HttpModule,
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h',
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule,
    ]
})
export class AuthModule {}
