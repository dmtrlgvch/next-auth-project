import {UserRole} from "@prisma/client";
import {DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
};

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      role: UserRole;
      isTwoFactorEnabled: boolean;
      isOAuth: boolean;
    } & DefaultSession["user"];
  }
}
