import MsgService from "../services/msgService.js";

const mockUrls = [
  btoa("tab=ciphersForm&ciphers=['cipher']&key=4&message=message"),
  btoa("tab=rsaForm&privKey=key&pubKey=key&message=message"),
  btoa("tab=hashForm&md5=md5&sha1=sha1&c=sha256&sha512=sha512&sha3=sha3&message=hashMessage"),
  btoa("tab=aesForm&passphrase=passphrase&aes=aes&des=des&tripledes=tripledes"),
  btoa("tab=blowfishForm&message=blowfishMessage")
];

const text = "message" + " DECRYPT IN: " + "link";

test("Test whatsApp cipher URL generator", ()=>{

  let msgService = new MsgService();
  let testString = mockUrls[0];
  let whatsappString = msgService.whatsApp("tab", {ciphers:["cipher"], key:"4", message:"message"});
  expect(Boolean(whatsappString = testString)).toBe(true);

});

test("Test whatsApp RSA URL generator", ()=>{

  let msgService = new MsgService();
  let testString = mockUrls[1];
  let whatsappString = msgService.whatsApp("rsaForm", {privKey:"key", pubKey:"key", message:"message"});
  expect(Boolean(whatsappString = testString)).toBe(true);

});

test("Test whatsApp Hash URL generator", ()=>{

  let msgService = new MsgService();
  let testString = mockUrls[2];
  let whatsappString = msgService.whatsApp("hashForm", {md5:"md5", sha1:"sha1", sha256:"sha256", sha512:"sha512", sha3:"sha3", message:"message"});
  expect(Boolean(whatsappString = testString)).toBe(true);

});

test("Test whatsApp AES URL generator", ()=>{

  let msgService = new MsgService();
  let testString = mockUrls[3];
  let whatsappString = msgService.whatsApp("aesForm", {passphrase:"passphrase", aes:"aes", des:"des", tripledes:"tripledes"});
  expect(Boolean(whatsappString = testString)).toBe(true);

});

test("Test whatsApp BlowFish URL generator", ()=>{

  let msgService = new MsgService();
  let testString = mockUrls[4];
  let whatsappString = msgService.whatsApp("blowfishForm", {blowfishMessage:"blowfishMessage"});
  expect(Boolean(whatsappString = testString)).toBe(true);

});

test("Test cipher text generator", ()=>{

  let msgService = new MsgService();
  let testString = text;
  let emailString = msgService.getText("tab", {ciphers:["cipher"], key:"4", message:"message"}, "link");
  expect(Boolean(emailString = testString)).toBe(true);

});

test("Test whatsApp RSA text generator", ()=>{

  let msgService = new MsgService();
  let testString = text;
  let emailString = msgService.getText("rsaForm", {privKey:"key", pubKey:"key", message:"message"}, "link");
  expect(Boolean(emailString = testString)).toBe(true);

});

test("Test whatsApp Hash text generator", ()=>{

  let msgService = new MsgService();
  let testString = text;
  let emailString = msgService.getText("hashForm", {md5:"md5", sha1:"sha1", sha256:"sha256", sha512:"sha512", sha3:"sha3", message:"message"}, "link");
  expect(Boolean(emailString = testString)).toBe(true);

});

test("Test whatsApp AES text generator", ()=>{

  let msgService = new MsgService();
  let testString = text;
  let emailString = msgService.getText("aesForm", {passphrase:"passphrase", aes:"aes", des:"des", tripledes:"tripledes"}, "link");
  expect(Boolean(emailString = testString)).toBe(true);

});

test("Test BlowFish text generator", ()=>{

  let msgService = new MsgService();
  let testString = text;
  let emailString = msgService.getText("blowfishForm", {blowfishMessage:"blowfishMessage"}, "link");
  expect(Boolean(emailString = testString)).toBe(true);

});

