class News {
    id: number;

    title: string;

    subheader: string;

    image: string;

    description: string;

    titleContent: string;

    sortContent: string;

    constructor(id, title, subtitle, image, description, titleContent, sortContent) {
        this.id = id;
        this.title = title;
        this.subheader = subtitle;
        this.image = image;
        this.description = description;
        this.titleContent = titleContent;
        this.sortContent = sortContent;
    }
}

export const newsData = [
    new News(
        1,
        'Bài viết 1',
        'Đăng bởi: Phí Thanh Thủy',
        'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
        'Mô tả',
        'Nội dung',
        'Thêm mô tả'
    ),
    new News(
        2,
        'Bài viết 2',
        'Đăng bởi: Phí Thanh Thủy',
        'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        'Mô tả',
        'Nội dung',
        'Thêm mô tả'
    ),
    new News(
        3,
        'Bài viết 3',
        'Đăng bởi: Phí Thanh Thủy',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'Mô tả',
        'Nội dung',
        'Thêm mô tả'
    ),
    new News(
        4,
        'Bài viết 4',
        'Đăng bởi: Phí Thanh Thủy',
        'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
        'Mô tả',
        'Nội dung',
        'Thêm mô tả'
    ),
    new News(
        5,
        'Bài viết 5',
        'Đăng bởi: Phí Thanh Thủy',
        'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        'Mô tả',
        'Nội dung',
        'Thêm mô tả'
    ),
    new News(
        6,
        'Bài viết 6',
        'Đăng bởi: Phí Thanh Thủy',
        'https://swall.teahub.io/photos/small/0-2836_nature-wallpaper-with-flowers-image-good-morning-photo.jpg',
        'Mô tả',
        'Nội dung',
        'Thêm mô tả'
    )
];
