import Images from '../model/Images';

export default {
    render(image: Images) {
        return {
            id: image.id,
            url: `http://192.168.0.10:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: Images[]) {
        return images.map(image => this.render(image));
    }
}