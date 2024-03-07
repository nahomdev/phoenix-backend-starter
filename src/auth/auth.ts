export abstract class AuthDriver {
    constructor() {
        
    }

    abstract getUserId(payload: Record<string, any>): Promise<string>;

    // abstract verify(user: User)
}