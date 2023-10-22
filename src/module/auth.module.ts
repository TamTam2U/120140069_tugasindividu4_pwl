import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller/auth.controller';

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [],
})
export class AuthModule {}
