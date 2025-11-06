import { Socket } from "socket.io"

type SocketId = string

enum SocketEvent {
	// existing collaboration events
	JOIN_REQUEST = "join-request",
	JOIN_ACCEPTED = "join-accepted",
	USER_JOINED = "user-joined",
	USER_DISCONNECTED = "user-disconnected",
	SYNC_FILE_STRUCTURE = "sync-file-structure",
	DIRECTORY_CREATED = "directory-created",
	DIRECTORY_UPDATED = "directory-updated",
	DIRECTORY_RENAMED = "directory-renamed",
	DIRECTORY_DELETED = "directory-deleted",
	FILE_CREATED = "file-created",
	FILE_UPDATED = "file-updated",
	FILE_RENAMED = "file-renamed",
	FILE_DELETED = "file-deleted",
	USER_OFFLINE = "offline",
	USER_ONLINE = "online",
	SEND_MESSAGE = "send-message",
	RECEIVE_MESSAGE = "receive-message",
	TYPING_START = "typing-start",
	TYPING_PAUSE = "typing-pause",
	CURSOR_MOVE = "cursor-move",
	USERNAME_EXISTS = "username-exists",
	REQUEST_DRAWING = "request-drawing",
	SYNC_DRAWING = "sync-drawing",
	DRAWING_UPDATE = "drawing-update",

	// ⭐️ friend system events
	FRIEND_REQUEST_SENT = "friend-request-sent",          // client → server
	FRIEND_REQUEST_RECEIVED = "friend-request-received",  // server → receiver client
	FRIEND_REQUEST_ACCEPTED = "friend-request-accepted",  // server → sender client
	FRIEND_REQUEST_REJECTED = "friend-request-rejected",  // server → sender client
}

interface SocketContext {
	socket: Socket
}

export { SocketEvent, SocketContext, SocketId }
