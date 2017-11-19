var cities = [
    {
      "frequency": 44,
      "city": "Bangalore",
      "lat": 12.9791198,
      "long": 77.5912997
    },
    {
      "frequency": 44,
      "city": "Mumbai",
      "lat": 18.9321862,
      "long": 72.8308337
    },
    {
      "frequency": 44,
      "city": "Kolkata",
      "lat": 22.5677459,
      "long": 88.3476023
    },
    {
      "frequency": 44,
      "city": "New Delhi",
      "lat": 28.6141793,
      "long": 77.2022662
    },
    {
      "frequency": 44,
      "city": "Kanpur",
      "lat": 26.4609135,
      "long": 80.3217588
    },
    {
      "frequency": 43,
      "city": "Puebla",
      "lat": 35.9891906,
      "long": -105.996411
    },
    {
      "frequency": 42,
      "city": "Ljubljana",
      "lat": 46.049865,
      "long": 14.5068921
    },
    {
      "frequency": 41,
      "city": "Le Chesnay",
      "lat": 48.8278506,
      "long": 2.1319603
    },
    {
      "frequency": 41,
      "city": "Mont Saint Aignan",
      "lat": 49.4679,
      "long": 1.0813
    },
    {
      "frequency": 41,
      "city": "Cachan",
      "lat": 48.7945413,
      "long": 2.3340758
    },
    {
      "frequency": 41,
      "city": "Marne-la-Vallee",
      "lat": 47.9824502,
      "long": 0.2135632
    },
    {
      "frequency": 41,
      "city": "Orsay",
      "lat": 48.6991805,
      "long": 2.1874811
    },
    {
      "frequency": 41,
      "city": "Malakoff",
      "lat": 48.8174048,
      "long": 2.2971588
    },
    {
      "frequency": 41,
      "city": "Paris",
      "lat": 48.8566101,
      "long": 2.3514992
    },
    {
      "frequency": 41,
      "city": "Chatenay-Malabry",
      "lat": 48.7661105,
      "long": 2.2781646
    },
    {
      "frequency": 41,
      "city": "Villeneuve-d'Ascq",
      "lat": 50.6271588,
      "long": 3.1506621
    },
    {
      "frequency": 41,
      "city": "Evry",
      "lat": 48.6345313,
      "long": 2.4522217
    },
    {
      "frequency": 41,
      "city": "Palaiseau",
      "lat": 48.7170283,
      "long": 2.2468567
    },
    {
      "frequency": 41,
      "city": "Rennes",
      "lat": 48.1113387,
      "long": -1.6800198
    },
    {
      "frequency": 41,
      "city": "Vandoeuvre-les-Nancy",
      "lat": 48.6599676,
      "long": 6.1724618
    },
    {
      "frequency": 41,
      "city": "Gif-sur-Yvette",
      "lat": 48.7018823,
      "long": 2.134529
    },
    {
      "frequency": 41,
      "city": "Villers-les-Nancy",
      "lat": 48.6731344,
      "long": 6.1536378
    },
    {
      "frequency": 41,
      "city": "Saint-Aubin",
      "lat": 49.5114,
      "long": 3.18881
    },
    {
      "frequency": 41,
      "city": "Marseille",
      "lat": 43.2961743,
      "long": 5.3699525
    },
    {
      "frequency": 41,
      "city": "Meulan",
      "lat": 49.0056863,
      "long": 1.9094643
    },
    {
      "frequency": 41,
      "city": "Fontainebleau",
      "lat": 48.4049375,
      "long": 2.7015872
    },
    {
      "frequency": 41,
      "city": "Toulouse",
      "lat": 43.6044622,
      "long": 1.4442469
    },
    {
      "frequency": 41,
      "city": "Issy-les-Moulineaux",
      "lat": 48.8250508,
      "long": 2.273457
    },
    {
      "frequency": 41,
      "city": "Cergy-Pontoise",
      "lat": 49.0527528,
      "long": 2.0388736
    },
    {
      "frequency": 41,
      "city": "Rueil-Malmaison",
      "lat": 48.8693888,
      "long": 2.1808837
    },
    {
      "frequency": 41,
      "city": "Metz",
      "lat": 49.1196964,
      "long": 6.1763552
    },
    {
      "frequency": 41,
      "city": "Saint-Etienne",
      "lat": 44.8104602,
      "long": 5.2680992
    },
    {
      "frequency": 40,
      "city": "Valencia",
      "lat": 39.4699014,
      "long": -0.3759513
    },
    {
      "frequency": 40,
      "city": "Barcelona",
      "lat": 41.3828939,
      "long": 2.1774322
    },
    {
      "frequency": 40,
      "city": "Madrid",
      "lat": 40.4167047,
      "long": -3.7035825
    },
    {
      "frequency": 40,
      "city": "Leon",
      "lat": 42.63414505,
      "long": -5.971415105
    },
    {
      "frequency": 40,
      "city": "Santander",
      "lat": 43.4623102,
      "long": -3.8101067
    },
    {
      "frequency": 40,
      "city": "Granada",
      "lat": 37.1830197,
      "long": -3.602192
    },
    {
      "frequency": 40,
      "city": "Oviedo",
      "lat": 43.3533424,
      "long": -5.87951434
    },
    {
      "frequency": 40,
      "city": "Zaragoza",
      "lat": 41.6521342,
      "long": -0.8809428
    },
    {
      "frequency": 40,
      "city": "Malaga",
      "lat": 36.7213028,
      "long": -4.4216366
    },
    {
      "frequency": 40,
      "city": "Cerdanyola del Valles",
      "lat": 41.4953663,
      "long": 2.1266247
    },
    {
      "frequency": 40,
      "city": "Cordoba",
      "lat": 37.8790699,
      "long": -4.7765998
    },
    {
      "frequency": 40,
      "city": "Santiago de Compostela",
      "lat": 42.8804219,
      "long": -8.5458608
    },
    {
      "frequency": 39,
      "city": "Canberra",
      "lat": -35.2975906,
      "long": 149.1012676
    },
    {
      "frequency": 39,
      "city": "Adelaide",
      "lat": -34.9274284,
      "long": 138.599899
    },
    {
      "frequency": 39,
      "city": "Sydney",
      "lat": -33.8548157,
      "long": 151.2164539
    },
    {
      "frequency": 39,
      "city": "Melbourne",
      "lat": -37.8142176,
      "long": 144.9631608
    },
    {
      "frequency": 39,
      "city": "Brisbane",
      "lat": -27.4689682,
      "long": 153.0234991
    },
    {
      "frequency": 39,
      "city": "Parkville",
      "lat": -31.982179,
      "long": 150.867003
    },
    {
      "frequency": 38,
      "city": "Lyngby",
      "lat": 55.7718649,
      "long": 12.5051413
    },
    {
      "frequency": 38,
      "city": "Aalborg",
      "lat": 57.0482206,
      "long": 9.9193939
    },
    {
      "frequency": 37,
      "city": "Dublin",
      "lat": 53.3497645,
      "long": -6.2602732
    },
    {
      "frequency": 36,
      "city": "Helsinki",
      "lat": 60.1674086,
      "long": 24.9425683
    },
    {
      "frequency": 36,
      "city": "Espoo",
      "lat": 60.2241869,
      "long": 24.6603626
    },
    {
      "frequency": 36,
      "city": "Vaasa",
      "lat": 63.08182095,
      "long": 21.47981235
    },
    {
      "frequency": 36,
      "city": "Tampere",
      "lat": 61.4980214,
      "long": 23.7603118
    },
    {
      "frequency": 36,
      "city": "Abo (Turku)",
      "lat": 60.4539619,
      "long": 22.2531529
    },
    {
      "frequency": 36,
      "city": "Abo",
      "lat": 60.4517531,
      "long": 22.2670522
    },
    {
      "frequency": 36,
      "city": "Jyvaskyla",
      "lat": 62.2393002,
      "long": 25.745951
    },
    {
      "frequency": 35,
      "city": "Buenos Aires",
      "lat": -34.6452384,
      "long": -58.3930969
    },
    {
      "frequency": 34,
      "city": "Tokyo",
      "lat": 34.2255804,
      "long": 139.2947745
    },
    {
      "frequency": 34,
      "city": "Sapporo",
      "lat": 43.044768,
      "long": 141.337215
    },
    {
      "frequency": 34,
      "city": "Sendai",
      "lat": 38.2661528,
      "long": 140.8715343
    },
    {
      "frequency": 34,
      "city": "Suita",
      "lat": 34.764884,
      "long": 135.51735
    },
    {
      "frequency": 34,
      "city": "Hakodate",
      "lat": 41.795886,
      "long": 140.7534617
    },
    {
      "frequency": 34,
      "city": "Kyoto",
      "lat": 35.0185804,
      "long": 135.763835
    },
    {
      "frequency": 34,
      "city": "Nagoya",
      "lat": 35.15792,
      "long": 136.90448
    },
    {
      "frequency": 34,
      "city": "Chofu",
      "lat": 35.660036,
      "long": 139.554815
    },
    {
      "frequency": 34,
      "city": "Toyohashi",
      "lat": 34.769123,
      "long": 137.391461
    },
    {
      "frequency": 34,
      "city": "Tsu",
      "lat": 34.7341973,
      "long": 136.5153283
    },
    {
      "frequency": 34,
      "city": "Yokohama",
      "lat": 35.444991,
      "long": 139.636768
    },
    {
      "frequency": 34,
      "city": "Higashihiroshima",
      "lat": 34.42683,
      "long": 132.741552
    },
    {
      "frequency": 33,
      "city": "Ruschlikon",
      "lat": 47.307465,
      "long": 8.5546421
    },
    {
      "frequency": 33,
      "city": "Zurich ZH",
      "lat": 47.258872,
      "long": 8.8490332
    },
    {
      "frequency": 33,
      "city": "Zurich",
      "lat": 47.3723957,
      "long": 8.5423216
    },
    {
      "frequency": 33,
      "city": "Manno",
      "lat": 46.0346218,
      "long": 8.919398
    },
    {
      "frequency": 33,
      "city": "Martigny",
      "lat": 46.103115,
      "long": 7.0727354
    },
    {
      "frequency": 33,
      "city": "Lausanne",
      "lat": 46.5218269,
      "long": 6.6327025
    },
    {
      "frequency": 33,
      "city": "Lugano",
      "lat": 46.0050102,
      "long": 8.9520281
    },
    {
      "frequency": 33,
      "city": "Geneve",
      "lat": 46.2017559,
      "long": 6.1466014
    },
    {
      "frequency": 33,
      "city": "Basel",
      "lat": 47.5581077,
      "long": 7.5878261
    },
    {
      "frequency": 32,
      "city": "Seoul",
      "lat": 37.5666791,
      "long": 126.9782914
    },
    {
      "frequency": 32,
      "city": "Yusong",
      "lat": 36.83801,
      "long": 127.14413
    },
    {
      "frequency": 31,
      "city": "Padua",
      "lat": 45.4077172,
      "long": 11.8734455
    },
    {
      "frequency": 31,
      "city": "Genoa",
      "lat": 44.40726,
      "long": 8.9338624
    },
    {
      "frequency": 31,
      "city": "Torino",
      "lat": 45.0677551,
      "long": 7.6824892
    },
    {
      "frequency": 31,
      "city": "Modena",
      "lat": 44.6458885,
      "long": 10.9255707
    },
    {
      "frequency": 31,
      "city": "Perugia",
      "lat": 43.1119613,
      "long": 12.3890104
    },
    {
      "frequency": 31,
      "city": "Milan",
      "lat": 45.4667971,
      "long": 9.1904984
    },
    {
      "frequency": 31,
      "city": "Rome",
      "lat": 41.8933203,
      "long": 12.4829321
    },
    {
      "frequency": 31,
      "city": "Pavia",
      "lat": 45.1860043,
      "long": 9.1546375
    },
    {
      "frequency": 31,
      "city": "Cagliari",
      "lat": 39.2169525,
      "long": 9.1128513
    },
    {
      "frequency": 31,
      "city": "Varese",
      "lat": 45.8183902,
      "long": 8.823913
    },
    {
      "frequency": 31,
      "city": "Siena",
      "lat": 43.3185536,
      "long": 11.3316533
    },
    {
      "frequency": 31,
      "city": "Florence",
      "lat": 43.7698712,
      "long": 11.2555757
    },
    {
      "frequency": 31,
      "city": "Trento",
      "lat": 46.0664228,
      "long": 11.1257601
    },
    {
      "frequency": 30,
      "city": "London",
      "lat": 42.988576,
      "long": -81.246643
    },
    {
      "frequency": 30,
      "city": "Kingston",
      "lat": 44.230687,
      "long": -76.481323
    },
    {
      "frequency": 30,
      "city": "Edmonton",
      "lat": 53.535411,
      "long": -113.507996
    },
    {
      "frequency": 30,
      "city": "Montreal",
      "lat": 45.4972159,
      "long": -73.6103642
    },
    {
      "frequency": 30,
      "city": "Toronto",
      "lat": 43.653963,
      "long": -79.387207
    },
    {
      "frequency": 30,
      "city": "Vancouver",
      "lat": 49.262428,
      "long": -123.11554
    },
    {
      "frequency": 30,
      "city": "Calgary",
      "lat": 51.02532675,
      "long": -114.0498685
    },
    {
      "frequency": 30,
      "city": "Waterloo",
      "lat": 43.466874,
      "long": -80.524635
    },
    {
      "frequency": 30,
      "city": "Sherbrooke",
      "lat": 45.403271,
      "long": -71.889038
    },
    {
      "frequency": 30,
      "city": "Regina",
      "lat": 50.44876,
      "long": -104.61731
    },
    {
      "frequency": 30,
      "city": "Quebec",
      "lat": 52.4760892,
      "long": -71.8258668
    },
    {
      "frequency": 30,
      "city": "Moncton",
      "lat": 46.097995,
      "long": -64.80011
    },
    {
      "frequency": 30,
      "city": "Victoria",
      "lat": 48.429201,
      "long": -123.365479
    },
    {
      "frequency": 30,
      "city": "Guelph",
      "lat": 43.546557,
      "long": -80.249977
    },
    {
      "frequency": 30,
      "city": "Winnipeg",
      "lat": 49.884017,
      "long": -97.168579
    },
    {
      "frequency": 29,
      "city": "Ghent",
      "lat": 51.0538286,
      "long": 3.7250121
    },
    {
      "frequency": 29,
      "city": "Louvain-la-Neuve",
      "lat": 50.6741689,
      "long": 4.614156732
    },
    {
      "frequency": 29,
      "city": "Brussels",
      "lat": 50.8465573,
      "long": 4.351697
    },
    {
      "frequency": 29,
      "city": "Liege",
      "lat": 50.6451381,
      "long": 5.5734203
    },
    {
      "frequency": 29,
      "city": "Elsene",
      "lat": 50.8222854,
      "long": 4.3815707
    },
    {
      "frequency": 29,
      "city": "Antwerpen",
      "lat": 51.2211097,
      "long": 4.3997081
    },
    {
      "frequency": 29,
      "city": "3000 Leuven",
      "lat": 50.8812533,
      "long": 4.692990322
    },
    {
      "frequency": 29,
      "city": "Mons",
      "lat": 50.4549568,
      "long": 3.951958
    },
    {
      "frequency": 28,
      "city": "21000 Novi Sad",
      "lat": 45.2551338,
      "long": 19.8451756
    },
    {
      "frequency": 27,
      "city": "Singapore City",
      "lat": 1.2904753,
      "long": 103.8520359
    },
    {
      "frequency": 27,
      "city": "Singapore",
      "lat": 1.2904753,
      "long": 103.8520359
    },
    {
      "frequency": 26,
      "city": "Palo Alto",
      "lat": 37.442156,
      "long": -122.1634472
    },
    {
      "frequency": 26,
      "city": "Madison",
      "lat": 43.074761,
      "long": -89.3837613
    },
    {
      "frequency": 26,
      "city": "New Brunswick",
      "lat": 40.4862174,
      "long": -74.4518173
    },
    {
      "frequency": 26,
      "city": "Irvine",
      "lat": 33.6856969,
      "long": -117.8259819
    },
    {
      "frequency": 26,
      "city": "Pittsburgh",
      "lat": 40.4416941,
      "long": -79.9900861
    },
    {
      "frequency": 26,
      "city": "Fairfax",
      "lat": 38.8462236,
      "long": -77.3063733
    },
    {
      "frequency": 26,
      "city": "Philadelphia",
      "lat": 39.9523993,
      "long": -75.1635899
    },
    {
      "frequency": 26,
      "city": "Cambridge",
      "lat": 42.3750997,
      "long": -71.1056157
    },
    {
      "frequency": 26,
      "city": "Baltimore",
      "lat": 39.2908816,
      "long": -76.610759
    },
    {
      "frequency": 26,
      "city": "Santa Clara",
      "lat": 37.3541132,
      "long": -121.9551744
    },
    {
      "frequency": 26,
      "city": "Austin",
      "lat": 30.2711286,
      "long": -97.7436995
    },
    {
      "frequency": 26,
      "city": "Princeton",
      "lat": 40.3492744,
      "long": -74.6592958
    },
    {
      "frequency": 26,
      "city": "Berkeley",
      "lat": 37.8708393,
      "long": -122.2728639
    },
    {
      "frequency": 26,
      "city": "Columbus",
      "lat": 39.9622601,
      "long": -83.0007065
    },
    {
      "frequency": 26,
      "city": "Amherst MA",
      "lat": 42.3803676,
      "long": -72.523143
    },
    {
      "frequency": 26,
      "city": "Pasadena",
      "lat": 34.1476452,
      "long": -118.1444779
    },
    {
      "frequency": 26,
      "city": "New York",
      "lat": 40.7306458,
      "long": -73.9866136
    },
    {
      "frequency": 26,
      "city": "Redmond",
      "lat": 47.6694141,
      "long": -122.1238767
    },
    {
      "frequency": 26,
      "city": "Sunnyvale",
      "lat": 37.3688301,
      "long": -122.0363496
    },
    {
      "frequency": 26,
      "city": "Ann Arbor",
      "lat": 42.2681569,
      "long": -83.7312291
    },
    {
      "frequency": 26,
      "city": "Minneapolis",
      "lat": 44.9772995,
      "long": -93.2654692
    },
    {
      "frequency": 26,
      "city": "San Diego",
      "lat": 32.7174209,
      "long": -117.1627714
    },
    {
      "frequency": 26,
      "city": "Atlanta",
      "lat": 33.7490987,
      "long": -84.3901849
    },
    {
      "frequency": 26,
      "city": "Troy",
      "lat": 42.6055893,
      "long": -83.1499304
    },
    {
      "frequency": 26,
      "city": "Houston",
      "lat": 29.7589382,
      "long": -95.3676974
    },
    {
      "frequency": 26,
      "city": "Mountain View",
      "lat": 37.3893889,
      "long": -122.0832101
    },
    {
      "frequency": 26,
      "city": "Chicago",
      "lat": 41.8755546,
      "long": -87.6244212
    },
    {
      "frequency": 26,
      "city": "Corvallis",
      "lat": 44.5645659,
      "long": -123.2620435
    },
    {
      "frequency": 26,
      "city": "College Park",
      "lat": 38.980666,
      "long": -76.9369189
    },
    {
      "frequency": 26,
      "city": "Salt Lake City",
      "lat": 40.7670126,
      "long": -111.8904308
    },
    {
      "frequency": 26,
      "city": "Durham",
      "lat": 35.9966551,
      "long": -78.9018115
    },
    {
      "frequency": 26,
      "city": "Syracuse",
      "lat": 43.0481221,
      "long": -76.1474244
    },
    {
      "frequency": 26,
      "city": "Seattle",
      "lat": 47.6038321,
      "long": -122.3300624
    },
    {
      "frequency": 26,
      "city": "Washington",
      "lat": 38.8949549,
      "long": -77.0366456
    },
    {
      "frequency": 26,
      "city": "Yorktown Heights",
      "lat": 41.2709274,
      "long": -73.7776336
    },
    {
      "frequency": 26,
      "city": "Ithaca",
      "lat": 42.4396039,
      "long": -76.4968019
    },
    {
      "frequency": 26,
      "city": "Rochester",
      "lat": 43.157285,
      "long": -77.615214
    },
    {
      "frequency": 26,
      "city": "Notre Dame",
      "lat": 41.70456775,
      "long": -86.23822026
    },
    {
      "frequency": 26,
      "city": "Albany",
      "lat": 42.6511674,
      "long": -73.754968
    },
    {
      "frequency": 26,
      "city": "Fort Collins",
      "lat": 40.5508527,
      "long": -105.0668085
    },
    {
      "frequency": 26,
      "city": "Ames",
      "lat": 42.0267703,
      "long": -93.6170554
    },
    {
      "frequency": 26,
      "city": "Bethlehem",
      "lat": 40.6178915,
      "long": -75.3786521
    },
    {
      "frequency": 26,
      "city": "Marina del Rey",
      "lat": 39.4035125,
      "long": -74.50842132
    },
    {
      "frequency": 26,
      "city": "Los Alamos",
      "lat": 35.8814009,
      "long": -106.2989958
    },
    {
      "frequency": 26,
      "city": "Boston",
      "lat": 42.3604823,
      "long": -71.0595678
    },
    {
      "frequency": 26,
      "city": "Athens",
      "lat": 33.9550905,
      "long": -83.3881868
    },
    {
      "frequency": 26,
      "city": "Tallahassee",
      "lat": 30.4380832,
      "long": -84.2809332
    },
    {
      "frequency": 26,
      "city": "Los Angeles",
      "lat": 34.054935,
      "long": -118.244476
    },
    {
      "frequency": 26,
      "city": "Iowa City",
      "lat": 41.6612561,
      "long": -91.5299106
    },
    {
      "frequency": 26,
      "city": "Urbana",
      "lat": 40.1117174,
      "long": -88.207301
    },
    {
      "frequency": 26,
      "city": "Edwardsville",
      "lat": 38.8114364,
      "long": -89.953157
    },
    {
      "frequency": 26,
      "city": "Chapel Hill",
      "lat": 35.9131542,
      "long": -79.05578
    },
    {
      "frequency": 26,
      "city": "Hanover",
      "lat": 43.703622,
      "long": -72.288666
    },
    {
      "frequency": 26,
      "city": "New Orleans",
      "lat": 29.9499323,
      "long": -90.0701156
    },
    {
      "frequency": 26,
      "city": "Evanston",
      "lat": 42.0447388,
      "long": -87.6930459
    },
    {
      "frequency": 26,
      "city": "Tampa",
      "lat": 27.9477595,
      "long": -82.458444
    },
    {
      "frequency": 26,
      "city": "Coral Gables",
      "lat": 25.6905515,
      "long": -80.23500898
    },
    {
      "frequency": 26,
      "city": "Provo",
      "lat": 40.2338438,
      "long": -111.6585337
    },
    {
      "frequency": 26,
      "city": "New Haven",
      "lat": 41.3082138,
      "long": -72.9250518
    },
    {
      "frequency": 26,
      "city": "Santa Cruz",
      "lat": 36.974201,
      "long": -122.0297182
    },
    {
      "frequency": 26,
      "city": "Fort Lauderdale",
      "lat": 26.1223084,
      "long": -80.1433786
    },
    {
      "frequency": 26,
      "city": "Annapolis",
      "lat": 38.9786401,
      "long": -76.492786
    },
    {
      "frequency": 26,
      "city": "West Lafayette",
      "lat": 40.4258686,
      "long": -86.9080655
    },
    {
      "frequency": 26,
      "city": "Riverside",
      "lat": 33.9533546,
      "long": -117.3961623
    },
    {
      "frequency": 26,
      "city": "Honolulu",
      "lat": 21.304547,
      "long": -157.8556764
    },
    {
      "frequency": 26,
      "city": "Menlo Park",
      "lat": 37.4538274,
      "long": -122.1821871
    },
    {
      "frequency": 26,
      "city": "Orlando",
      "lat": 28.5421232,
      "long": -81.3790475
    },
    {
      "frequency": 26,
      "city": "St Louis",
      "lat": 38.6272733,
      "long": -90.1978889
    },
    {
      "frequency": 26,
      "city": "Schaumburg",
      "lat": 42.0333608,
      "long": -88.083406
    },
    {
      "frequency": 26,
      "city": "Mobile",
      "lat": 30.6943566,
      "long": -88.0430541
    },
    {
      "frequency": 26,
      "city": "San Jose",
      "lat": 37.3297085,
      "long": -121.9031599
    },
    {
      "frequency": 26,
      "city": "Gainesville",
      "lat": 29.6519396,
      "long": -82.3249961
    },
    {
      "frequency": 26,
      "city": "Malvern",
      "lat": 40.036202,
      "long": -75.5138959
    },
    {
      "frequency": 26,
      "city": "Fairfield",
      "lat": 38.2493581,
      "long": -122.0399663
    },
    {
      "frequency": 26,
      "city": "Newark",
      "lat": 40.735657,
      "long": -74.1723667
    },
    {
      "frequency": 26,
      "city": "Torrance",
      "lat": 33.8358492,
      "long": -118.3406288
    },
    {
      "frequency": 26,
      "city": "East Lansing",
      "lat": 42.7355416,
      "long": -84.4852469
    },
    {
      "frequency": 26,
      "city": "Tempe",
      "lat": 33.4144139,
      "long": -111.9094474
    },
    {
      "frequency": 26,
      "city": "Morgantown",
      "lat": 39.6296809,
      "long": -79.9559437
    },
    {
      "frequency": 26,
      "city": "State College",
      "lat": 40.78791245,
      "long": -77.85388594
    },
    {
      "frequency": 26,
      "city": "Lexington",
      "lat": 38.0464066,
      "long": -84.4970393
    },
    {
      "frequency": 26,
      "city": "Cleveland",
      "lat": 41.5051613,
      "long": -81.6934446
    },
    {
      "frequency": 26,
      "city": "Blacksburg",
      "lat": 37.2296566,
      "long": -80.4136767
    },
    {
      "frequency": 26,
      "city": "Fargo",
      "lat": 46.877229,
      "long": -96.789821
    },
    {
      "frequency": 26,
      "city": "Raleigh",
      "lat": 35.7803977,
      "long": -78.6390989
    },
    {
      "frequency": 26,
      "city": "Storrs",
      "lat": 41.8084314,
      "long": -72.2495231
    },
    {
      "frequency": 26,
      "city": "San Francisco",
      "lat": 29.893526,
      "long": -102.4040317
    },
    {
      "frequency": 26,
      "city": "Ithaki",
      "lat": 42.67966885,
      "long": -70.84098604
    },
    {
      "frequency": 26,
      "city": "San Antonio",
      "lat": 29.4246002,
      "long": -98.4951405
    },
    {
      "frequency": 26,
      "city": "Boca Raton",
      "lat": 26.3586885,
      "long": -80.0830984
    },
    {
      "frequency": 26,
      "city": "Lubbock",
      "lat": 33.5778631,
      "long": -101.8551665
    },
    {
      "frequency": 26,
      "city": "Medford",
      "lat": 42.3264181,
      "long": -122.8718605
    },
    {
      "frequency": 26,
      "city": "Bloomington",
      "lat": 39.1670396,
      "long": -86.5342881
    },
    {
      "frequency": 26,
      "city": "Buffalo",
      "lat": 42.8867166,
      "long": -78.8783922
    },
    {
      "frequency": 26,
      "city": "Eugene",
      "lat": 44.0505054,
      "long": -123.0950506
    },
    {
      "frequency": 26,
      "city": "Tucson",
      "lat": 32.2218917,
      "long": -110.9262353
    },
    {
      "frequency": 26,
      "city": "College Station",
      "lat": 30.6253463,
      "long": -96.3271538
    },
    {
      "frequency": 26,
      "city": "Laurel",
      "lat": 39.0992752,
      "long": -76.8483061
    },
    {
      "frequency": 26,
      "city": "Columbia",
      "lat": 34.0007493,
      "long": -81.0343313
    },
    {
      "frequency": 26,
      "city": "Adelaide",
      "lat": 40.0434074,
      "long": -79.623928
    },
    {
      "frequency": 26,
      "city": "Moffett Field",
      "lat": 37.41129325,
      "long": -122.0541698
    },
    {
      "frequency": 26,
      "city": "Fullerton",
      "lat": 33.8708215,
      "long": -117.9294165
    },
    {
      "frequency": 26,
      "city": "Niskayuna",
      "lat": 42.7797995,
      "long": -73.8456775
    },
    {
      "frequency": 26,
      "city": "Stillwater",
      "lat": 36.1156306,
      "long": -97.0585717
    },
    {
      "frequency": 26,
      "city": "Providence",
      "lat": 41.8239891,
      "long": -71.4128343
    },
    {
      "frequency": 26,
      "city": "Hoboken",
      "lat": 40.7433066,
      "long": -74.0323752
    },
    {
      "frequency": 26,
      "city": "Waco",
      "lat": 31.549333,
      "long": -97.1466695
    },
    {
      "frequency": 26,
      "city": "Dallas",
      "lat": 32.7762719,
      "long": -96.7968559
    },
    {
      "frequency": 26,
      "city": "Binghamton",
      "lat": 42.096968,
      "long": -75.914341
    },
    {
      "frequency": 26,
      "city": "El Segundo",
      "lat": 33.912594,
      "long": -118.383179
    },
    {
      "frequency": 26,
      "city": "Birmingham",
      "lat": 33.5206824,
      "long": -86.8024326
    },
    {
      "frequency": 25,
      "city": "Moscow",
      "lat": 55.7507178,
      "long": 37.6176606
    },
    {
      "frequency": 25,
      "city": "Kirov",
      "lat": 58.6035257,
      "long": 49.6639029
    },
    {
      "frequency": 25,
      "city": "Samara",
      "lat": 53.198627,
      "long": 50.113987
    },
    {
      "frequency": 24,
      "city": "Graz",
      "lat": 47.0702563,
      "long": 15.4385716
    },
    {
      "frequency": 24,
      "city": "Innsbruck",
      "lat": 47.2654296,
      "long": 11.3927685
    },
    {
      "frequency": 24,
      "city": "Vienna",
      "lat": 48.2083537,
      "long": 16.3725042
    },
    {
      "frequency": 24,
      "city": "Leoben",
      "lat": 47.3827417,
      "long": 15.0942137
    },
    {
      "frequency": 24,
      "city": "Hagenberg",
      "lat": 48.6347558,
      "long": 16.4549748
    },
    {
      "frequency": 23,
      "city": "Rio de Janeiro",
      "lat": -22.9110137,
      "long": -43.2093727
    },
    {
      "frequency": 23,
      "city": "Petropolis",
      "lat": -22.519963,
      "long": -43.192613
    },
    {
      "frequency": 23,
      "city": "Campinas",
      "lat": -22.90556,
      "long": -47.06083
    },
    {
      "frequency": 23,
      "city": "Sao Paulo",
      "lat": -23.5506507,
      "long": -46.6333824
    },
    {
      "frequency": 22,
      "city": "Lisbon",
      "lat": 38.7077926,
      "long": -9.1365061
    },
    {
      "frequency": 22,
      "city": "Porto",
      "lat": 41.1494512,
      "long": -8.6107884
    },
    {
      "frequency": 21,
      "city": "Berlin",
      "lat": 52.5170365,
      "long": 13.3888599
    },
    {
      "frequency": 21,
      "city": "Stuttgart",
      "lat": 48.7784485,
      "long": 9.1800132
    },
    {
      "frequency": 21,
      "city": "Bonn",
      "lat": 50.735851,
      "long": 7.10066
    },
    {
      "frequency": 21,
      "city": "Bayreuth",
      "lat": 49.9427202,
      "long": 11.5763079
    },
    {
      "frequency": 21,
      "city": "Tubingen",
      "lat": 48.5236164,
      "long": 9.0535531
    },
    {
      "frequency": 21,
      "city": "Potsdam",
      "lat": 52.4009309,
      "long": 13.0591397
    },
    {
      "frequency": 21,
      "city": "Dortmund",
      "lat": 51.5142273,
      "long": 7.4652789
    },
    {
      "frequency": 21,
      "city": "Gottingen",
      "lat": 51.5327604,
      "long": 9.9352051
    },
    {
      "frequency": 21,
      "city": "Bochum",
      "lat": 51.4818111,
      "long": 7.2196635
    },
    {
      "frequency": 21,
      "city": "Ulm",
      "lat": 48.3973944,
      "long": 9.9932755
    },
    {
      "frequency": 21,
      "city": "Mannheim",
      "lat": 49.489591,
      "long": 8.467236
    },
    {
      "frequency": 21,
      "city": "Bremen",
      "lat": 53.0758196,
      "long": 8.8071646
    },
    {
      "frequency": 21,
      "city": "Magdeburg",
      "lat": 52.1315889,
      "long": 11.6399609
    },
    {
      "frequency": 21,
      "city": "Leipzig",
      "lat": 51.3391827,
      "long": 12.3810549
    },
    {
      "frequency": 21,
      "city": "Heidelberg",
      "lat": 49.4093582,
      "long": 8.694724
    },
    {
      "frequency": 21,
      "city": "Freiburg im Breisgau",
      "lat": 48.0021322,
      "long": 7.823903
    },
    {
      "frequency": 21,
      "city": "Pfinztal",
      "lat": 48.9918661,
      "long": 8.5553158
    },
    {
      "frequency": 21,
      "city": "Darmstadt",
      "lat": 49.872775,
      "long": 8.651177
    },
    {
      "frequency": 21,
      "city": "Munich",
      "lat": 48.1371079,
      "long": 11.5753822
    },
    {
      "frequency": 21,
      "city": "Frankfurt am Main",
      "lat": 50.2164354,
      "long": 8.6915513
    },
    {
      "frequency": 21,
      "city": "Gerlingen",
      "lat": 48.7983947,
      "long": 9.0624386
    },
    {
      "frequency": 21,
      "city": "Dresden",
      "lat": 51.0493286,
      "long": 13.7381437
    },
    {
      "frequency": 21,
      "city": "Bamberg",
      "lat": 49.8926723,
      "long": 10.8876149
    },
    {
      "frequency": 21,
      "city": "Kaiserslautern",
      "lat": 49.4432174,
      "long": 7.7689951
    },
    {
      "frequency": 21,
      "city": "Rostock",
      "lat": 54.14736345,
      "long": 12.1090156
    },
    {
      "frequency": 21,
      "city": "Halle",
      "lat": 51.4322083,
      "long": 8.2953778
    },
    {
      "frequency": 21,
      "city": "Hamburg",
      "lat": 53.550341,
      "long": 10.000654
    },
    {
      "frequency": 21,
      "city": "Konstanz",
      "lat": 47.659216,
      "long": 9.1750718
    },
    {
      "frequency": 20,
      "city": "Prague",
      "lat": 50.0874654,
      "long": 14.4212535
    },
    {
      "frequency": 19,
      "city": "Istanbul",
      "lat": 41.0096334,
      "long": 28.9651646
    },
    {
      "frequency": 18,
      "city": "Bratislava",
      "lat": 48.1359085,
      "long": 17.15974406
    },
    {
      "frequency": 17,
      "city": "Holguin",
      "lat": 20.8894416,
      "long": -76.2604751
    },
    {
      "frequency": 16,
      "city": "Torun",
      "lat": 53.0210671,
      "long": 18.618612
    },
    {
      "frequency": 16,
      "city": "Warsaw",
      "lat": 52.2319237,
      "long": 21.0067265
    },
    {
      "frequency": 15,
      "city": "Hong Kong",
      "lat": 22.2793278,
      "long": 114.1628131
    },
    {
      "frequency": 15,
      "city": "Beijing",
      "lat": 39.9059631,
      "long": 116.391248
    },
    {
      "frequency": 15,
      "city": "Shanghai",
      "lat": 31.2253441,
      "long": 121.4888922
    },
    {
      "frequency": 15,
      "city": "Hangzhou",
      "lat": 30.2489634,
      "long": 120.2052342
    },
    {
      "frequency": 15,
      "city": "Wuhan",
      "lat": 30.5960213,
      "long": 114.2992796
    },
    {
      "frequency": 15,
      "city": "Guangzhou",
      "lat": 23.1301964,
      "long": 113.2592945
    },
    {
      "frequency": 15,
      "city": "Suzhou",
      "lat": 31.3016935,
      "long": 120.5810725
    },
    {
      "frequency": 15,
      "city": "Hefei",
      "lat": 31.8228094,
      "long": 117.2218033
    },
    {
      "frequency": 15,
      "city": "Harbin",
      "lat": 45.7656666,
      "long": 126.6160584
    },
    {
      "frequency": 15,
      "city": "Xi'an",
      "lat": 29.670072,
      "long": 118.057392
    },
    {
      "frequency": 15,
      "city": "Nanjing",
      "lat": 32.0609736,
      "long": 118.7916458
    },
    {
      "frequency": 15,
      "city": "Jinan",
      "lat": 36.6507007,
      "long": 117.1140042
    },
    {
      "frequency": 14,
      "city": "Athens",
      "lat": 38.2636612,
      "long": 22.0576191
    },
    {
      "frequency": 14,
      "city": "Thessaloniki",
      "lat": 40.6403167,
      "long": 22.9352716
    },
    {
      "frequency": 14,
      "city": "Patra",
      "lat": 38.246242,
      "long": 21.7350847
    },
    {
      "frequency": 14,
      "city": "Ioannina",
      "lat": 39.6639818,
      "long": 20.8522784
    },
    {
      "frequency": 14,
      "city": "Rethymnon",
      "lat": 35.3644853,
      "long": 24.487304
    },
    {
      "frequency": 13,
      "city": "Jeddah",
      "lat": 26.2934059,
      "long": 50.0945253
    },
    {
      "frequency": 12,
      "city": "Nicosia",
      "lat": 35.1739302,
      "long": 33.364726
    },
    {
      "frequency": 11,
      "city": "Stockholm",
      "lat": 59.3251172,
      "long": 18.0710935
    },
    {
      "frequency": 11,
      "city": "Linkoping",
      "lat": 58.4098135,
      "long": 15.6245252
    },
    {
      "frequency": 11,
      "city": "Goteborg",
      "lat": 57.7072326,
      "long": 11.9670171
    },
    {
      "frequency": 10,
      "city": "Budapest",
      "lat": 47.4983815,
      "long": 19.0404707
    },
    {
      "frequency": 9,
      "city": "Taipei",
      "lat": 25.0375167,
      "long": 121.5637
    },
    {
      "frequency": 8,
      "city": "Mashhad",
      "lat": 36.2974945,
      "long": 59.6059232
    },
    {
      "frequency": 8,
      "city": "Shiraz",
      "lat": 29.6067651,
      "long": 52.5375663
    },
    {
      "frequency": 8,
      "city": "Tehran",
      "lat": 35.7006177,
      "long": 51.401375
    },
    {
      "frequency": 7,
      "city": "Groningen",
      "lat": 53.2217925,
      "long": 6.558245335
    },
    {
      "frequency": 7,
      "city": "Amsterdam",
      "lat": 52.3745403,
      "long": 4.897975506
    },
    {
      "frequency": 7,
      "city": "Nijmegen",
      "lat": 51.84260195,
      "long": 5.838519612
    },
    {
      "frequency": 7,
      "city": "Delft",
      "lat": 51.9994572,
      "long": 4.362724539
    },
    {
      "frequency": 7,
      "city": "Eindhoven",
      "lat": 51.44855695,
      "long": 5.450122522
    },
    {
      "frequency": 7,
      "city": "Leiden",
      "lat": 52.1518157,
      "long": 4.481108867
    },
    {
      "frequency": 7,
      "city": "Enschede",
      "lat": 52.22336325,
      "long": 6.870595664
    },
    {
      "frequency": 7,
      "city": "Den Haag",
      "lat": 52.07494555,
      "long": 4.269680221
    },
    {
      "frequency": 6,
      "city": "Haifa",
      "lat": 32.8191218,
      "long": 34.9983856
    },
    {
      "frequency": 6,
      "city": "Jerusalem",
      "lat": 31.78911765,
      "long": 35.22297301
    },
    {
      "frequency": 6,
      "city": "Ra'anana",
      "lat": 32.1874966,
      "long": 34.86782878
    },
    {
      "frequency": 6,
      "city": "Tel Aviv-Yafo",
      "lat": 32.0804808,
      "long": 34.7805274
    },
    {
      "frequency": 6,
      "city": "Beer Sheba",
      "lat": 31.2454994,
      "long": 34.84078376
    },
    {
      "frequency": 6,
      "city": "Yavne",
      "lat": 31.8761804,
      "long": 34.7380919
    },
    {
      "frequency": 6,
      "city": "Rehovot",
      "lat": 31.8952532,
      "long": 34.8105616
    },
    {
      "frequency": 6,
      "city": "Ramat Gan",
      "lat": 32.0686867,
      "long": 34.8246812
    },
    {
      "frequency": 5,
      "city": "Dubai",
      "lat": 25.2683521,
      "long": 55.2961962
    },
    {
      "frequency": 4,
      "city": "Edinburgh",
      "lat": 55.9495628,
      "long": -3.1914972
    },
    {
      "frequency": 4,
      "city": "Manchester",
      "lat": 53.4791301,
      "long": -2.2441009
    },
    {
      "frequency": 4,
      "city": "Southampton",
      "lat": 50.9025349,
      "long": -1.404189
    },
    {
      "frequency": 4,
      "city": "Cambridge",
      "lat": 52.2033051,
      "long": 0.124862
    },
    {
      "frequency": 4,
      "city": "London",
      "lat": 51.5073219,
      "long": -0.1276474
    },
    {
      "frequency": 4,
      "city": "Sheffield",
      "lat": 53.3806626,
      "long": -1.4702278
    },
    {
      "frequency": 4,
      "city": "Coventry",
      "lat": 52.4081812,
      "long": -1.510477
    },
    {
      "frequency": 4,
      "city": "Coleraine",
      "lat": 55.1315912,
      "long": -6.671861
    },
    {
      "frequency": 4,
      "city": "Egham",
      "lat": 51.4312585,
      "long": -0.5473085
    },
    {
      "frequency": 4,
      "city": "Oxford",
      "lat": 51.7520131,
      "long": -1.2578499
    },
    {
      "frequency": 4,
      "city": "Lancaster",
      "lat": 54.0484068,
      "long": -2.7990345
    },
    {
      "frequency": 4,
      "city": "Exeter",
      "lat": 50.725562,
      "long": -3.5269108
    },
    {
      "frequency": 4,
      "city": "York",
      "lat": 53.9590555,
      "long": -1.0815361
    },
    {
      "frequency": 4,
      "city": "Surrey",
      "lat": 51.2715316,
      "long": -0.341452351
    },
    {
      "frequency": 4,
      "city": "Canterbury",
      "lat": 51.2800275,
      "long": 1.0802533
    },
    {
      "frequency": 4,
      "city": "Birmingham",
      "lat": 52.4776875,
      "long": -1.8948516
    },
    {
      "frequency": 4,
      "city": "Norwich",
      "lat": 52.628606,
      "long": 1.29227
    },
    {
      "frequency": 4,
      "city": "Bristol",
      "lat": 51.4538022,
      "long": -2.5972985
    },
    {
      "frequency": 4,
      "city": "Farnborough",
      "lat": 51.5367279,
      "long": -1.3748299
    },
    {
      "frequency": 4,
      "city": "Liverpool",
      "lat": 53.4054719,
      "long": -2.9805392
    },
    {
      "frequency": 3,
      "city": "Hamilton",
      "lat": -37.7876214,
      "long": 175.2813186
    },
    {
      "frequency": 2,
      "city": "Bangkok",
      "lat": 13.7538929,
      "long": 100.8160803
    },
    {
      "frequency": 1,
      "city": "Tartu",
      "lat": 58.3727059,
      "long": 26.7237528
    }
   ]