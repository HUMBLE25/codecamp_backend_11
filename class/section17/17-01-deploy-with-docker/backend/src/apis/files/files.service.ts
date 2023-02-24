import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

interface IFileServicesUpload {
  file: FileUpload;
}
@Injectable()
export class FilesService {
  upload({ file }: IFileServicesUpload): string {
    console.log(file);
    //1. 파일을 클라우드 스토리지에 저장하는 로직
    //
    //1-1)스토리지 셋팅하기
    //json파일을 가져와서 폴더에 넣어 줘야한다.
    const storage = new Storage({
      projectId: 'adept-acronym-377508',
      keyFilename: 'adept-acronym-377508-77e2d0305474.json',
    }).bucket('jingyeombackpro');
    //npm에서 다운받아야 한다.
    //1-2)스토리지에 파일 올리기
    file
      .createReadStream()
      .pipe(storage.file('abcd').createWriteStream())
      .on('finish', () => {
        console.log('성공');
      })
      .on('error', (error) => {
        console.log('실패', error);
      }); //pipe안에 들어온것을 storage에 업로드한다.

    console.log('파일 전송이 완료되엇습니다.');
    return '끝!!!';
  }
}
