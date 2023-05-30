const { Connection, PublicKey } = require("@solana/web3.js");
const { ALL_PROGRAM_IDS } = require("./constant");

async function main() {
  const connection = new Connection(process.env.RPC_URL);

  await Promise.all(
    ALL_PROGRAM_IDS.map(async (programId) => {
      const accounts = await connection.getProgramAccounts(
        new PublicKey(programId)
      );
      console.log(accounts.length);
    })
  );

  console.log("done");
}

main().catch(console.error.bind(null, "main error: "));
