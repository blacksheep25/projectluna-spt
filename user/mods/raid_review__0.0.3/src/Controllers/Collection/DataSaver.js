"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileExists = exports.ReadFile = exports.RenameFile = exports.DeleteFile = exports.CreateFolder = exports.WriteLineToFile = void 0;
const fs = __importStar(require("fs"));
function CreateFolder(parentFolder, subFolder = '', targetFolder = '') {
    let paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder];
    let finalPath = paths.filter(path => path !== '').join('/');
    if (!fs.existsSync(finalPath)) {
        fs.mkdirSync(finalPath, { recursive: true });
        console.log(`[RAID-REVIEW] Folder created: ${finalPath}`);
    }
}
exports.CreateFolder = CreateFolder;
function CreateFile(parentFolder, subFolder = '', targetFolder, fileName, keys) {
    CreateFolder(parentFolder);
    CreateFolder(parentFolder, subFolder);
    CreateFolder(parentFolder, subFolder, targetFolder);
    let paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder, `${fileName}`];
    let finalPath = paths.filter(path => path !== '').join('/');
    if (!fs.existsSync(finalPath)) {
        fs.writeFileSync(finalPath, '', 'utf-8');
        fs.appendFileSync(finalPath, keys, 'utf-8');
        console.log(`[RAID-REVIEW] File created: ${finalPath}`);
    }
}
function WriteLineToFile(parentFolder, subFolder = '', targetFolder = '', fileName, keys, value) {
    CreateFile(parentFolder, subFolder, targetFolder, fileName, keys);
    let paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder, `${fileName}`];
    let finalPath = paths.filter(path => path !== '').join('/');
    fs.appendFileSync(finalPath, value, 'utf-8');
}
exports.WriteLineToFile = WriteLineToFile;
function DeleteFile(parentFolder, subFolder = '', targetFolder = '', fileName) {
    let paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder, `${fileName}`];
    let finalPath = paths.filter(path => path !== '').join('/');
    let exists = fs.existsSync(finalPath);
    if (exists) {
        fs.rmSync(finalPath);
    }
}
exports.DeleteFile = DeleteFile;
function RenameFile(parentFolder, subFolder = '', targetFolder = '', fileName, newFilename) {
    try {
        let paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder, `${fileName}`];
        let finalPath = paths.filter(path => path !== '').join('/');
        let rename_paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder, `${newFilename}`];
        let renameFinalPath = rename_paths.filter(path => path !== '').join('/');
        let exists = fs.existsSync(finalPath);
        if (exists) {
            fs.renameSync(finalPath, renameFinalPath);
        }
    }
    catch (error) {
        console.log(`[RAID-REVIEW]`, error);
        return null;
    }
}
exports.RenameFile = RenameFile;
function ReadFile(parentFolder, subFolder = '', targetFolder = '', fileName) {
    try {
        let paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder, `${fileName}`];
        let finalPath = paths.filter(path => path !== '').join('/');
        return fs.readFileSync(finalPath, 'utf-8');
    }
    catch (error) {
        console.log(`[RAID-REVIEW]`, error);
        return '';
    }
}
exports.ReadFile = ReadFile;
function FileExists(parentFolder, subFolder = '', targetFolder = '', fileName) {
    try {
        let paths = [__dirname, '../../..', 'data', parentFolder, subFolder, targetFolder, `${fileName}`];
        let finalPath = paths.filter(path => path !== '').join('/');
        let exists = fs.existsSync(finalPath);
        return exists;
    }
    catch (error) {
        console.log(`[RAID-REVIEW]`, error);
        return false;
    }
}
exports.FileExists = FileExists;
//# sourceMappingURL=DataSaver.js.map