'use strict';

const userData = {
    ['token123']:{
        coverImage: 'https://i.pinimg.com/originals/d7/56/34/d756348f1cfbad0fa19769ae009d0190.jpg',
        profileImage: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        location: 'Los Angeles',
        description: 'Detail-oriented English major with extensive journalism experience. Managing editor of college paper with strong leadership skills, particularly in assignment delegation and maintenance of set deadlines. Well-versed in proofreading strategies and APA guidelines.',
        name: 'Mike Jhonson',
        rentHistory: [1,2,3]
    },
    ['token987']:{
        coverImage: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg',
        profileImage: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        location: 'New York',
        name: "Elisabeth Jordon",
        description: 'Customer services specialist with extensive management experience. Strong interpersonal skills with certification in employee mediation and team-building. Innovative problem solver; developed and implemented new service strategies to increase customer satisfaction by 30%.',
        rentHistory: [3,4,5]
    }
}

const hostsData = [
    {
        id:1,
        coverImage: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        profileImage: 'https://i2.au.reastatic.net/150x200-format=webp/f7e561882cbe986c6ebecbefde3368de525c248c4beebb3e597730672ea126ce/main.jpg',
        location: 'Los Angeles',
        name: "Lenny Nguyen",
        description: "Lenny Nguyen is a professional representing BnBCulture. If you'd like to discuss your property with Lenny, use thecontact agent form below.",
        rents: [1]
    },
    {   
        id:2,
        name: 'Alice Davies',
        coverImage: 'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/83df5f07f40b5a39c239028c756bfab79a02f499f410f1d22351f3fd2750f7ba/image.jpg',
        profileImage: 'https://i2.au.reastatic.net/150x200-format=webp/6d220507142c7fa157f1d9f4ac3e5187c13cf39a35d5303280306368dfeac40f/main.jpg',
        location: 'New York',
        description: 'Alice Davies is a dedicated and successful senior property manager at McGrath Croydon. She has a proven track record having managed large portfolios and her success has led her to win numerous awards. Alice is a people person who prides herself on her excellent communication skills. She builds rapport quickly and enjoys forming long-term relationships with her clients.',
        rents: [2]
    },
    {
        id:3,
        coverImage: 'https://i.pinimg.com/originals/03/40/30/034030d067631865efed392d5eea1a27.jpg',
        profileImage: 'https://i2.au.reastatic.net/150x200-format=webp/e5da21a1f714696e4c231f276039b727b3b4d1d614d072a5d96d06b1ef9843f7/main.jpg',
        location: 'California',
        description: 'Customer services specialist with extensive management experience. Strong interpersonal skills with certification in employee mediation and team-building. Innovative problem solver; developed and implemented new service strategies to increase customer satisfaction by 30%.',
        rents: [3]
    },
    {
        id:4,
        name: 'Sharath Tejaswi',
        coverImage: 'https://i2.au.reastatic.net/300x170/13d447221cd7d05681fbb3ad4a3152eb29864f0ef8e41f7aa878fd962d81c69e/main.jpg',
        profileImage: 'https://i2.au.reastatic.net/150x200-format=webp/6bab3aff957aa3136e71f8fee162da67e3db90c77a9ab3cdbe0447eb1a2cada4/main.jpg',
        location: 'Suite 6, 4A Meridian Place, BELLA VISTA',
        description: 'Sharath Tejaswi brings fourteen years of experience in marketing & customers service. He has been passionate about real estate since his earliest years, he always knew that he wanted to chart a path helping others and found his true calling in real estate serving his clients and guiding them through one of the biggest investments of their lives. He provides quality service to build relationships with clients and more importantly, maintain those relationships by communicating effectively.',
        rents: [4,5]
    }
]

const rentsData = [
    {
      summary:{
        id: 1,
        miles: 200,
        description: "BnBCulture",
        price: 460,
        location: "32 Stonewood Circuit, Hadfield",
        thumbnail: "https://i2.au.reastatic.net/800x600-format=webp/5aafb47463d0c0eb4ebddc9a69bd2831bf934cd7c70d7d4de437acdd361c89ac/image.jpg",
        rooms:{
            bedrooms: 3,
            bathrooms: 2,
            parkingSpots: 2
        }
    },
      allData:{
        images: [
            'https://i2.au.reastatic.net/800x600-format=webp/916783a426d1d2275bd149b706910979c11313ceaf0479cdffe83733dd22bc3f/image.jpg',
            'https://i2.au.reastatic.net/800x600-format=webp/e4b65eb87e39d841f131faaf17d840cf916f5df05b29c01c8adcdabfdedcba90/image.jpg',
            'https://i2.au.reastatic.net/800x600-format=webp/8ac3f3da1fe9493cf506a60ca13e9b38d2af8488ade579b0661cc557c559e48a/image.jpg',
            'https://i2.au.reastatic.net/800x600-format=webp/4ceef72aedc8c02a8fbf6e46fed8536a01d99f35e3026197b889b35bfe090905/image.jpg'
          ],
          summaryDescription: "House",
          stars: 4,
          host:{
            id:1,
            profilePicture: "https://i2.au.reastatic.net/150x200-format=webp/f7e561882cbe986c6ebecbefde3368de525c248c4beebb3e597730672ea126ce/main.jpg",
          },
          specifications: [
             "2 Bathrooms" ,
             "Wi Fi",
             'Dishwasher',
             'Alarm system'
          ],
          description:
            "A 5 minute drive from Fawkner station is this modern and spacious 3-bedroom, double-storey house with garage in Stonewood Circuit. Enjoy tranquillity in a quiet location encircled by reserves and creeks, not far from shopping areas. A short drive will take you to Glenroy or Coburg where you can find a selection of groceries, restaurants, Farmers’ markets, pharmacies, and more. This home provides a peaceful location without sacrificing convenience and selection.",
        },
    },
    {
        summary:{
          id: 2,
          miles: 100,
          description: "McGrath",
          price: 190,
          location: "Elaine Court, Mooroolbark",
          thumbnail: "https://i2.au.reastatic.net/800x600-format=webp/83df5f07f40b5a39c239028c756bfab79a02f499f410f1d22351f3fd2750f7ba/image.jpg",
          rooms:{
            bedrooms: 2,
            bathrooms: 2,
            parkingSpots: 1
          }
        },
        allData:{
          images: [
              'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/27215bd22b0a8d38f84248f6fc8509e2a6efc3d76bed2cd19dce7207e55b405f/image.jpg',
              'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/2877f38bbaea2e8ad1eb37397fada1ec72ae8fa99867b105beb947ec371a5447/image.jpg',
              'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/d71f43a072ebd103e50850dfc1569fa79a9b66b0399b20d5d54b810379cb513c/image.jpg',
              'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/da182688c03792812d6c5dfad6225678c8ad0f11ff68207831f43ba57c67076b/image.jpg'
            ],
            summaryDescription: "House",
            stars: 5,
            host:{
              id:2,
              profilePicture: "https://i2.au.reastatic.net/150x200-format=webp/6d220507142c7fa157f1d9f4ac3e5187c13cf39a35d5303280306368dfeac40f/main.jpg",
            },
            specifications: [
               "Air conditioning" ,
               "Wi Fi",
               'Built-in wardrobes',
               'Parking'
            ],
            description:
              "Situated within excellent proximity to North Croydon shops and schools this lovely Unit is sure to impress. Offering easy living and all the mod cons that all tenants look for. Call now to book your inspection as this one will not last long. Please contact the Property Manager Janine on 0437 522 362 to arrange your inspection time directly.",
          },
      },
      {
        summary:{
          id: 3,
          miles: 100,
          description: "Black Picket Fence",
          price: 190,
          location: "9/16 Selborne St, Mount Gravatt East",
          thumbnail: "https://i2.au.reastatic.net/800x600-format=webp/0ca0817478368fc2faad49488f7e99aa94a6e3763e26058f4930c44a49ab7eef/image.jpg",
          rooms:{
            bedrooms: 2,
            bathrooms: 2,
            parkingSpots: 2
          }
        },
        allData:{
          images: [
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/0ca0817478368fc2faad49488f7e99aa94a6e3763e26058f4930c44a49ab7eef/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/8e80a94d314206a501820696b9bc357979d6ec5be995cc736905a938ccbff205/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/a3105ca7cf29941aac08043d52c3dbb60249dec4af0a98935400dae7db2e1bf6/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/ba6710244e04bf16e321708f2cd61c1634efc3738b619b4f62d5aae3716f33ec/image.jpg'
            ],
            summaryDescription: "Apartment",
            stars: 5,
            host:{
              id:3,
              profilePicture: "https://i2.au.reastatic.net/150x200-format=webp/e5da21a1f714696e4c231f276039b727b3b4d1d614d072a5d96d06b1ef9843f7/main.jpg",
            },
            specifications: [
               "Air conditioning" ,
               "Dishwasher",
               'Built-in wardrobes',
               'Garage spaces'
            ],
            description:
                "Perfectly matched to its brilliant location, this stylish apartment is situated in a well maintained complex and offers low maintenance living with quality fixtures and a generous courtyard. This ground floor home is secure and quiet with a lovely leafy outlook - Within walking distance of the Mount Gravatt Central Hub, transport and Mt Gravatt Plaza Shopping Centre!"  
            },
      },
      {
        summary:{
          id: 4,
          miles: 10,
          description: "Legend commited reality",
          price: 475,
          location: "20 Benbury Street, Quakers Hill",
          thumbnail: "https://i2.au.reastatic.net/800x600-format=webp/a17da8a0efed2caa6c7d225e350e5b27e88d6aa48cc6e183a6c3bff0b0407362/image.jpg",
          rooms:{
            bedrooms: 3,
            bathrooms: 1,
            parkingSpots: 1
          }
        },
        allData:{
          images: [
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/53906491fc165b6caad39908386825b7bcde813ee52b53a8afc4ec0e34dbc227/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/43a9615e5f43df3f099d666d79cee184dfdeca1fa018598836de2114581db327/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/5dd2507cf6516c37da9d540a891fd36e15d6268da0c405f3afe3efd05a822447/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/df8d4b057de8b6d2e7feec5496756ed14b13c7ec45b95b45a4653dcf544b6129/image.jpg',
            ],
            summaryDescription: "House",
            stars: 2,
            host:{
              id:4,
              profilePicture: "https://i2.au.reastatic.net/150x200-format=webp/6bab3aff957aa3136e71f8fee162da67e3db90c77a9ab3cdbe0447eb1a2cada4/main.jpg",
            },
            specifications: [
               "Toilets: 1" ,
               "Dishwasher",
               'Built-in wardrobes',
               'Garage spaces: 1'
            ],
            description:
                "Nice and Quiet Street. Sundrenched front lounge, great for the growing family. Kitchen central to the home, plenty of cupboard and benchtop space"
            },
      },
      {
        summary:{
          id: 5,
          miles: 15,
          description: "Legend commited reality",
          price: 495,
          location: "129 Colebee Crescent, Hassall Grove",
          thumbnail: "https://i2.au.reastatic.net/800x600-format=webp/48ae43c49d9b00fcf637568d70a6ef36d8eb1046363e530aeaab027fc2813aa9/image.jpg",
          rooms:{
            bedrooms: 3,
            bathrooms: 1,
            parkingSpots: 2
          }
        },
        allData:{
          images: [
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/9b8f2232c8199369b26fdf20f7a5b86e7524771b47d99574d7712e92ce642b58/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/8de07a006c2d8545c537dccd07c608555688dfa0b841ccdde1ceaf7823942bb7/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/7538ac031ff37abf2ab75d2074d9614350eb4c400d7cb262ba4a1b032c97685c/image.jpg',
                'https://i2.au.reastatic.net/800x600-resize,extend,r=33,g=40,b=46/e80693732df803ffb9262cf83790b7be772f2ce6bbba367e40a7989f872fbdcd/image.jpg'
            ],
            summaryDescription: "House",
            stars: 4,
            host:{
              id:4,
              profilePicture: "https://i2.au.reastatic.net/150x200-format=webp/6bab3aff957aa3136e71f8fee162da67e3db90c77a9ab3cdbe0447eb1a2cada4/main.jpg",
            },
            specifications: [
               "Carport Spaces: 1" ,
               "Dishwasher",
               "Air conditioning"
            ],
            description:
                "Centrally located to everything with easy access to the M7, Marsden Park Business Park and Plumpton Market Place. Safe walking distance to St. Clare's Catholic High School, Hassall Grove Public School, Richard Johnson Anglican School, local public transport direct to Mt Druitt and Blacktown train stations and Hassall Grove Plaza which boasts chemist, doctors and all the basic amenities."
            },
      },
  ];

exports.rents_all = function(req, res) {
    res.json(rentsData);
};

exports.rents_by_rent_id = function(req, res) {
    
  const rent = rentsData.find(item=>item.summary.id == req.params.rentId)
    try{
        res.json({...rent.summary, ...rent.allData});
    }
    catch(e){
        res.send(e);
    }
};

exports.rents_by_host_id = function(req, res) {
    const rent = rentsData.filter(item=>item.allData.host.id == req.params.hostId)
      try{
          res.json(rent.map(item=>({...item.summary, ...item.allData})));
      }
      catch(e){
          res.send(e);
      }
  };

  exports.user_by_id = function(req, res) {
      console.log(req);
    const user = userData[req.headers.usertoken]
      try{
          res.json(user);
      }
      catch(e){
          res.send(e);
      }
  };

  exports.host_by_id = function(req, res) {
    const host = hostsData.find(item=>item.id == req.params.hostId)
      try{
          res.json(host);
      }
      catch(e){
          res.send(e);
      }
  };
