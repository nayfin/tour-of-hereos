import * as camera from 'nativescript-camera';
import { knownFolders, path } from 'tns-core-modules/file-system';
import { ImageSource } from 'tns-core-modules/image-source/image-source';



export function takePhoto() {
  camera.isAvailable();
  camera
    .takePicture()
    .then(imageAsset => {
      const source = new ImageSource();
      source.fromAsset(imageAsset).then((imageSource: ImageSource) => {
        const folderPath = knownFolders.documents().path;
        const fileName = 'test.jpg';
        this.heroImagePath = path.join(folderPath, fileName);
        const saved: boolean = imageSource.saveToFile(
          this.heroImagePath,
          'jpg'
        );
        if (saved) {
          console.log('Saved: ' + this.heroImagePath);
          console.log('Image saved successfully!');
        }
      });
    })
    .catch(err => {
      console.log('Error -> ' + err.message);
    });
}
