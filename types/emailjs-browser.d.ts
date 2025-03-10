declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface SendForm {
    (
      serviceID: string,
      templateID: string,
      templateParams: Record<string, unknown>,
      publicKey: string
    ): Promise<EmailJSResponseStatus>;
  }

  export const send: SendForm;
  
  export function init(publicKey: string): void;
} 