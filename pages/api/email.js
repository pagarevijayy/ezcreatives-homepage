import { GoogleSpreadsheet } from "google-spreadsheet";

async function initSpreadsheet(docId) {
  try {
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const document = new GoogleSpreadsheet(docId);

    // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await document.useServiceAccountAuth({
      client_email: process.env.NEXT_PUBLIC_GOOGLESHEETS_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLESHEET_API_KEY.replace(
        /\\n/gm,
        "\n"
      ),
    });

    await document.loadInfo(); // loads document properties and worksheets

    return document;
  } catch (error) {
    console.log("sheet initialization error: \n", error);
    res
      .status(500)
      .json({ success: false, message: "Google Sheets initialization error." });
  }
}

async function addData(sheet, email, ctaSource) {
  try {
    const response = await sheet.addRow({ email, ctaSource });
    return response;
  } catch (error) {
    console.log("add data error: \n", error);
    res.status(500).json({
      success: false,
      message: "Google Sheets initialization error.",
    });
  }
}

export default async function handler(req, res) {
  const googleSheetID = "1kaNaOHwDs5CF4dqj6txv3GSOQrvl-8MChUlTc-xSmm4";
  const emailId = req.query.email;
  const ctaSource = req.query.ctaSource;

  // Initialize spreadsheet
  const doc = await initSpreadsheet(googleSheetID);

  // Select a sheet
  const sheet = doc.sheetsByTitle["leads"];

  // Do action

  // 1. add data to the sheet
  const newRow = await addData(sheet, emailId, ctaSource);
  const newEmail = newRow.email;
  const newSource = newRow.ctaSource;
  const feedback = { email: newEmail, ctaSource: newSource };

  res
    .status(201)
    .json({ success: true, message: "email address stored", data: feedback });
}
