import * as XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import { encode as base64Encode } from 'base-64';

const exportToExcel = async (data, fileName) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });

    const base64Data = base64Encode(wbout);

    const filePath = `${FileSystem.documentDirectory}${fileName}.xlsx`;
    await FileSystem.writeAsStringAsync(filePath, base64Data, { encoding: FileSystem.EncodingType.Base64 });

    return filePath;
};

export default exportToExcel;
