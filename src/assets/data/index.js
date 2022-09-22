const productCategoryData = {
    categories: [
        {
            id: 1,
            category: 'Chips',
            brand: 'Bombay Sweets',
        },
        {
            id: 2,
            category: 'Shoe',
            brand: 'Apex',
        },
        {
            id: 3,
            category: 'Laptop',
            brand: 'HP',
        }
    ]
}

const productListData = {
    products: [
        {
            id: 1,
            name: 'Soundbar',
            category: 'Electronics',
            image: 'soundbar.jpg',
        },
        {
            id: 2,
            name: 'Diet Coke',
            category: 'Drinks',
            image: 'coca.png',
        },
        {
            id: 3,
            name: 'Adidas',
            category: 'Shoe',
            image: 'adidas2.jpg',
        }
    ]
}

const productCategoryTypesData = {
    types: [
        { id: 1, name: 'Shoe' },
        { id: 2, name: 'Computer' },
        { id: 3, name: 'Electronics' },
        { id: 4, name: 'Book' },
        { id: 5, name: 'Drinks' }
    ]
}

const vendorListData = {
    vendors: [
        {
            id: 1,
            name: 'Salauddin',
            email: 'dummy_1@bvend.com',
            image: 'profile_1.jpg',
        },
        {
            id: 2,
            name: 'Nilima',
            email: 'dummy_2@bvend.com',
            image: 'profile_2.jpg',
        },
        {
            id: 3,
            name: 'Prithika',
            email: 'dummy_3@bvend.com',
            image: 'profile_3.jpg',
        }
    ]
}

const vendorRequestListData = {
    vendor_requests: [
        {
            id: 1,
            title: 'Registration Request 1',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 2,
            title: 'Registration Request 2',
            description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy'
        },
        {
            id: 3,
            title: 'Registration Request 3',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        },
    ]
}

const machineCategoryTypesData = {
    types: [
        { id: 1, name: 'category 1' },
        { id: 2, name: 'category 2' },
        { id: 3, name: 'category 3' },
        { id: 4, name: 'category 4' },
        { id: 5, name: 'category 5' }
    ]
}

const machineListData = {
    machines: [
        {
            id: 1,
            title: 'Machine One',
            location: '33/A Gulshan, Dhaka',
            image: 'machine_1.jpg',
            totalAmount: '10,000',
            category: 'Category 1',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            id: 2,
            title: 'Machine Two',
            location: '33/A Banani, Dhaka',
            image: 'machine_2.jpg',
            totalAmount: '30,000',
            category: 'Category 2',
            description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy',
        },
        {
            id: 3,
            title: 'Machine Three',
            location: '33/A Rampura, Dhaka',
            image: 'machine_3.jpg',
            totalAmount: '20,000',
            category: 'Category 3',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
    ]
}


const transactionListData = {
    transactions: [
        {
            id: 1,
            title: 'Registration Request 1',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 2,
            title: 'Registration Request 2',
            description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy'
        },
        {
            id: 3,
            title: 'Registration Request 3',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        },
    ]
}


export {
    productListData,
    productCategoryData,
    productCategoryTypesData,
    vendorListData,
    vendorRequestListData,
    transactionListData,
    machineCategoryTypesData,
    machineListData
}
