type Messages = typeof import("./messages/en.json");
// type AuthMessages = typeof import("./messages/en/auth.json");

// Importing other language files ..

// Create a new type by combining all message types
// type Messages = UsersMessages & AuthMessages;

declare interface IntlMessages extends Messages { }