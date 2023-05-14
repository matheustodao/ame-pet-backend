import bcrypt from 'bcrypt'

class CryptClass {
  async hash(text: string) {
    const salt = await bcrypt.genSalt(2);
    const textHashed = await bcrypt.hash(text, salt)
    return textHashed;
  }

  async compare(text: string, textHashed: string) {
    const isValid = await bcrypt.compare(text, textHashed);

    return isValid;
  }
}

export const Crypt = new CryptClass();
