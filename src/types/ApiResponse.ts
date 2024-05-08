import { Message } from "@/model/User";

export interface ApiResponse {
    success: any;
    seccess: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message>
}