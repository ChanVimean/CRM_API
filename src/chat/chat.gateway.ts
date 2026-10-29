import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ path: '/chat' })
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    console.log('Received:', payload);

    return {
      event: 'message',
      data: {
        reply: 'Hello Gateway',
        received: payload,
      },
    };
  }
}
