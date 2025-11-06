// Enum representing user connection states
enum USER_CONNECTION_STATUS {
	OFFLINE = "offline",
	ONLINE = "online",
}

// Interface representing a connected user
interface User {
	username: string                      // unique username
	roomId: string                        // room the user is in
	status: USER_CONNECTION_STATUS        // online/offline status
	cursorPosition: number                // for collaborative editing
	typing: boolean                       // typing indicator
	currentFile: string | null            // currently active file (if any)
	socketId: string                      // unique socket connection id
	selectionStart?: number               // cursor selection start
	selectionEnd?: number                 // cursor selection end

	// 🧩 --- Friend System Additions ---
	friends?: string[]                    // confirmed friends' usernames
	friendRequestsSent?: string[]         // usernames this user sent requests to
	friendRequestsReceived?: string[]     // usernames who sent requests to this user
}

export { USER_CONNECTION_STATUS, User }
