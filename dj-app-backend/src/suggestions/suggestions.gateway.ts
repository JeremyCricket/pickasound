import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SuggestionsGateway {
    @WebSocketServer()
    server: Server;

    sendUpdates() {
        this.server.emit('updateSuggestions');
    }
}
