angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });

  function FormCtrl($scope){
    /*

    */
    
    $scope.Name = function(DogName){
      $scope.name = true;
      $scope.gender = true;
    }

    $scope.Gender = function(DogName){
      $scope.gender = false;
      $scope.dogInfo = true;
      if(DogName.gender === 'Male'){
        DogName.genderInfo = 'Neutered';
      }else{
        DogName.genderInfo = 'Spayed';
      }
    }

    $scope.DogInfo = function(DogName){
      $scope.dogInfo = false;
      $scope.personalInfo = true;
      console.log(DogName);
    }

    $scope.PersonalInfo = function(DogName){
      $scope.homeInfo = true;
      $scope.personalInfo = false;
      console.log(DogName);
    }

    $scope.HomeInfo = function(DogName){
      if(DogName.injure === 'No'){
        delete(DogName.number);
        delete(DogName.ik);
      }
      if(DogName.human === 'No'){
        delete(DogName.hc);
        delete(DogName.HiStatus);
      }
      console.log(DogName);
    }

    $scope.states = [
      {name:'Alabama'},
      {name:'Alaska'},
      {name:'Arizona'},
      {name:'Arkansas'},
      {name:'California'},
      {name:'Colorado'},
      {name:'Connecticut'},
      {name:'Delaware'},
      {name:'Florida'},
      {name:'Georgia'},
      {name:'Hawaii'},
      {name:'Idaho'},
      {name:'Illinois'},
      {name:'Indiana'},
      {name:'Iowa'},
      {name:'Kansas'},
      {name:'Kentucky'},
      {name:'Louisiana'},
      {name:'Maine'},
      {name:'Maryland'},
      {name:'Massachusetts'},
      {name:'Michigan'},
      {name:'Minnesota'},
      {name:'Mississippi'},
      {name:'Missouri'},
      {name:'Montana'},
      {name:'Nebraska'},
      {name:'Nevada'},
      {name:'New Hampshire'},
      {name:'New Jersey'},
      {name:'New Mexico'},
      {name:'New York'},
      {name:'North Carolina'},
      {name:'North Dakota'},
      {name:'Ohio'},
      {name:'Oklahoma'},
      {name:'Oregon'},
      {name:'Pennsylvania'},
      {name:'Rhode Island'},
      {name:'South Carolina'},
      {name:'South Dakota'},
      {name:'Tennessee'},
      {name:'Texas'},
      {name:'Utah'},
      {name:'Vermont'},
      {name:'Virginia'},
      {name:'Washington'},
      {name:'West Virginia'},
      {name:'Wisconsin'},
      {name:'Wyoming'}
    ]

    $scope.breeds = [
      {name:'Abruzzen'},
      {name:'Affenpinscher'},
      {name:'Afghan Hound'},
      {name:'Aidi'},
      {name:'Ainu'},
      {name:'Airedale Terrier'},
      {name:'Akbash'},
      {name:'Akita'},
      {name:'Alapaha Blue Blood Bull DOg'},
      {name:'Alaskan Klee Kai'},
      {name:'Alaskan Malamute'},
      {name:'American Bull Terrier'},
      {name:'American Bulldog'},
      {name:'American Eskimo'},
      {name:'American Foxhound'},
      {name:'American Hairless Terrier'},
      {name:'American Pit Bull Terrier'},
      {name:'American Staffordshire Terrier'},
      {name:'American Water Spaniel'},
      {name:'Anatolian Shepard'},
      {name:'Anglo-Francais Tricolor'},
      {name:'Appenzell Mountain Dog'},
      {name:'Argentine Dog'},
      {name:'Ariegeois'},
      {name:'Aussiedoodle'},
      {name:'Austrain Hound'},
      {name:'Austrain Short-Haired Pinscher'},
      {name:'Australian Cattle Dog'},
      {name:'Australian Kelpie'},
      {name:'Australian Shepherd'},
      {name:'Australian Silky Terrier'},
      {name:'Australian Terrier'},
      {name:'Azawakh'},
      {name:'Balkan Hound'},
      {name:'Barbet'},
      {name:'Basenji'},
      {name:'Basset artesien Normand'},
      {name:'Basset Bleu De Gascigne'},
      {name:'Basset Fauve De Bretagne'},
      {name:'Basset Griffon Vendeen'},
      {name:'Basset Hound'},
      {name:'Bavarian Mountain Hound'},
      {name:'Beagle'},
      {name:'Beagle Harrier'},
      {name:'Beaglier'},
      {name:'Bearded Collie'},
      {name:'Beauceron'},
      {name:'Bedlington Terrier'},
      {name:'Belgian Griffon'},
      {name:'Belgian Malinois'},
      {name:'Belgian Sheepdog'},
      {name:'Belgian Shepherd Laeenois'},
      {name:'Belgian Shepherd Malinois'},
      {name:'Belgian Shepherd Tervuren'},
      {name:'Belgian Tervuren'},
      {name:'Bergamasco'},
      {name:'Berger Picard'},
      {name:'Bernese Hound'},
      {name:'Bernese Mountain Dog'},
      {name:'Bichon Avanese'},
      {name:'Bichon Frise'},
      {name:'Bichpoo'},
      {name:'Billy'},
      {name:'Black & Tan Coonhound'},
      {name:'Black & Tan Toy Terrier'},
      {name:'Black Forest Hound'},
      {name:'Black Mouth Cur'},
      {name:'Black Russian Terrier'},
      {name:'Bloodhound'},
      {name:'Bluetick Coonhound'},
      {name:'Bolognese'},
      {name:'Border Collie'},
      {name:'Border Terrier'},
      {name:'Borzoi'},
      {name:'Bosnian Hound'},
      {name:'Boston Terrier'},
      {name:'Bouvier Des Flandres'},
      {name:'Boxer'},
      {name:'Boxer Mix'},
      {name:'Boxerdoodle'},
      {name:'Boykin Spaniel'},
      {name:'Bracco Italiano'},
      {name:'Braque Ariegeois'},
      {name:'Braque D`Auvergne'},
      {name:'Braque Du Bourbonnais'},
      {name:'Braque Dupuy'},
      {name:'Braque Saint-Germain'},
      {name:'Briard'},
      {name:'Briquet Griffon Vendeen'},
      {name:'Brittany Spaniel'},
      {name:'Brussels Griffon'},
      {name:'Bull Terrier'},
      {name:'Bulldog'},
      {name:'Bullmastiff'},
      {name:'Cairn Terrier'},
      {name:'Cairnoodle'},
      {name:'Canaan Dog'},
      {name:'Cane Corso Mastiff'},
      {name:'Cao Da Serra De Aires'},
      {name:'Cao Da Serra De Estrela'},
      {name:'Cao Da Serra De Laboreiro'},
      {name:'Cao Da Castro Laboreiro'},
      {name:'Carolina'},
      {name:'Catahoula Lepard Dog'},
      {name:'Caucasian'},
      {name:'Cavachon'},
      {name:'Cavalier King Charles Spaniel'},
      {name:'Cavapoo'},
      {name:'Central Asian Ovtcharka'},
      {name:'Ceskey Terrier'},
      {name:'Chesapeake Bay Retriever'},
      {name:'Chesapeake Bay Terrier'},
      {name:'Chien Francais'},
      {name:'Chihuahua'},
      {name:'Chinese Chongqing Dog'},
      {name:'Chinese Crested'},
      {name:'Chinese Foo Dog'},
      {name:'Chinese Imperial Ch`in'},
      {name:'Chinese Shar-pei'},
      {name:'Chinese Temple Dog'},
      {name:'Chinook'},
      {name:'Chipoo'},
      {name:'Chow Chow'},
      {name:'Chow Mix'},
      {name:'Cirneco Dell Etna'},
      {name:'Clumber Spaniel'},
      {name:'Coockapoo'},
      {name:'Cocker Spaniel'},
      {name:'Collie'},
      {name:'Corgi'},
      {name:'Coton De Tulear'},
      {name:'Croatian Sheepdog'},
      {name:'Curly Coated Retriever'},
      {name:'Czechoslovakian Wolfdog'},
      {name:'Dachsbracke, Montano-Alpine'},
      {name:'Dachshund'},
      {name:'Dachsvracke, Westphalian'},
      {name:'Dalmatian'},
      {name:'Dalmation Mix'},
      {name:'Dandi Dinmont Terrier'},
      {name:'Dashshund Smooth'},
      {name:'Dashshund Wire'},
      {name:'Deerhound'},
      {name:'Doberman Pinscher'},
      {name:'Dobi Mix'},
      {name:'Dogo Argentino'},
      {name:'Dogue De Bordeaux'},
      {name:'Doodleman Pinscher'},
      {name:'Drentse Patrijshond'},
      {name:'Drever'},
      {name:'Dunker'},
      {name:'Dutch Shepherd'},
      {name:'English Bulldog'},
      {name:'English Cocker Spaniel'},
      {name:'English Coonhound'},
      {name:'English Foxhound'},
      {name:'English Pointer'},
      {name:'English Setter'},
      {name:'English Shepherd'},
      {name:'English Springer Spaniel'},
      {name:'English Toy Spaniel'},
      {name:'Entlebucher Mountain Dog'},
      {name:'Eskimo Dog'},
      {name:'Estrela Mountain'},
      {name:'Field Spaniel'},
      {name:'Fila Brasileiro'},
      {name:'Finnish Hound'},
      {name:'Finnish Lapphund'},
      {name:'Finnish Spitz'},
      {name:'Flat Coated Retriever'},
      {name:'Fox Terrier, Smooth'},
      {name:'Fox Terrier, Wire'},
      {name:'Fox Terrier, Toy'},
      {name:'French Bulldog'},
      {name:'French Pointer'},
      {name:'French Spaniel'},
      {name:'Gammel Dansk Honsehund'},
      {name:'German Hovawart'},
      {name:'German Hunting Terrier'},
      {name:'German Long-Haired Pointer'},
      {name:'German Pinscher'},
      {name:'German Shepherd'},
      {name:'German Shepherd Mix'},
      {name:'German Shorthaired Pointer'},
      {name:'German Spaniel'},
      {name:'German Wirehaired Pointer'},
      {name:'Glen of Imaal Terrier'},
      {name:'Golden Retriever'},
      {name:'Goldendoodle'},
      {name:'Gordon Setter'},
      {name:'Grand Anglo-Francais'},
      {name:'Grand Bleu De Gascogne'},
      {name:'Grand Gascon Saintongeois'},
      {name:'Grand Griffon Vendeen'},
      {name:'Great Dane'},
      {name:'Great Pyrenees'},
      {name:'Great Spitz'},
      {name:'Greater Swiss Mountain Dog'},
      {name:'Greek Hound'},
      {name:'Greenland'},
      {name:'Greyhound'},
      {name:'Griffon Brabancon'},
      {name:'Griffon Fauve De Bretagne'},
      {name:'Griffon Nivernais'},
      {name:'Grosser Musterlander'},
      {name:'Hairless Dog'},
      {name:'Haldenstover'},
      {name:'Hamilton Hound'},
      {name:'Hanover Hound'},
      {name:'Harlekinpinscher'},
      {name:'Havanese'},
      {name:'Heeler'},
      {name:'Hokkaidoken'},
      {name:'Hovawart'},
      {name:'Hunt Terrier'},
      {name:'Hygenhund'},
      {name:'Ibizan Hound'},
      {name:'Icelan Sheepdog'},
      {name:'Illyrian Sheepdog'},
      {name:'Irish Setter'},
      {name:'Irish Terrier'},
      {name:'Irish Warter Spaniel'},
      {name:'Irish Wolfhound'},
      {name:'Italian Greyhound'},
      {name:'Italian Hound'},
      {name:'Italian Spinone'},
      {name:'Jack Russell'},
      {name:'Japanese Chin'},
      {name:'Japanese Spitz'},
      {name:'Jindo'},
      {name:'Jura Hound'},
      {name:'Kai Dog'},
      {name:'Karelian Bear Dog'},
      {name:'Karst Sheepdog'},
      {name:'Keeshond'},
      {name:'Kerry Blue Terrier'},
      {name:'Kishu Ken'},
      {name:'Kleiner Musterlander'},
      {name:'Komondor'},
      {name:'Kooikerhondje'},
      {name:'Kromfohrlander'},
      {name:'Kuvasz'},
      {name:'Kyushu'},
      {name:'Lab Mix'},
      {name:'Labradoodle'},
      {name:'Labrador Retriever'},
      {name:'Lagotto Romagnolo'},
      {name:'Lakeland Terrier'},
      {name:'Lancashire Heeler'},
      {name:'Landseer'},
      {name:'Lapphund'},
      {name:'Lapponian Herder'},
      {name:'Leonberger'},
      {name:'Levesque'},
      {name:'Lhasa Apso'},
      {name:'Lhasapoo'},
      {name:'Little Lion Dog'},
      {name:'Lowchen'},
      {name:'Lucernese Hound'},
      {name:'Lundehund'},
      {name:'Magyar Agar'},
      {name:'Malshi'},
      {name:'Maltese'},
      {name:'Maltipom'},
      {name:'Maltipoo'},
      {name:'Manchester Terrier'},
      {name:'Manchester Terrier, Toy'},
      {name:'Maremma Sheepdog'},
      {name:'Mastiff'},
      {name:'McNab'},
      {name:'Mexican Hairless'},
      {name:'Minature American Shepherd'},
      {name:'Minature Australian Shepherd'},
      {name:'Mini Dachshund'},
      {name:'Miniature Bull Terrier'},
      {name:'Miniature Pinscher'},
      {name:'Miniature Poodle'},
      {name:'Mix Eleven to Twenty Four Pounds'},
      {name:'Mix Fifty to Seventy Four Pounds'},
      {name:'Mix less that Ten Pounds'},
      {name:'Mix One Hundred to One Hundred and Fourty Nine Pounds'},
      {name:'Mix Over One Hundred and Fourty Nine Pounds'},
      {name:'Mix Seventy Five to Ninety Nine Pounds'},
      {name:'Mix Twenty Five to Forty Nine Pounds'},
      {name:'Morkie'},
      {name:'Mountain Cur'},
      {name:'Mudi'},
      {name:'Musterlander'},
      {name:'Neapolitan Mastiff'},
      {name:'New Guinea Singing Dog'},
      {name:'Newfoundland'},
      {name:'Norfolk Terrier'},
      {name:'Norrbottenspets'},
      {name:'Norsk Buhund'},
      {name:'Norwegian Buhund'},
      {name:'Norwegian Elkhound'},
      {name:'Norwegian Lundehund'},
      {name:'Norwich Terrier'},
      {name:'Nova Scotia Duck Tolling Retriever'},
      {name:'Olde English Bulldogge'},
      {name:'Olde English Sheepdog'},
      {name:'Otterhound'},
      {name:'Papillon'},
      {name:'Papoo'},
      {name:'Parson Russell Terrier'},
      {name:'Patterdale Terrier'},
      {name:'Peek-A-Pom'},
      {name:'Pekepoo'},
      {name:'Pekingese'},
      {name:'Perdiguero De Burgos'},
      {name:'Perdiguero Portugues'},
      {name:'Peruvian Inca Orchid'},
      {name:'Petit Anglo-Francais'},
      {name:'Petit Bleu De Gascogne'},
      {name:'Petit Griffon Bleu De Gascogne'},
      {name:'Petite Basset Griffon'},
      {name:'Pharaoh Hound'},
      {name:'Picardy Sheepdog'},
      {name:'Picardy Spaniel'},
      {name:'Pinscher'},
      {name:'Pit Bull'},
      {name:'Pit Mix'},
      {name:'Plott Hound'},
      {name:'Podenco Ibicenco'},
      {name:'Podengo Portugueso'},
      {name:'Pointer'},
      {name:'Poitevin'},
      {name:'Polish Hound'},
      {name:'Polish Lowland Sheepdog'},
      {name:'Polish Owczarek Nizinny'},
      {name:'Polish Tatra Sheepdog'},
      {name:'Pomchi'},
      {name:'Pomeranian'},
      {name:'Pont-Audemere Spaniel'},
      {name:'Poodle, Minature'},
      {name:'Poodle, Standard'},
      {name:'Poodle, Toy'},
      {name:'Porcelaine'},
      {name:'Portuguese Podengo'},
      {name:'Portuguese Pointer'},
      {name:'Portuguese Water Dog'},
      {name:'Posavac Hound'},
      {name:'Presa Canario'},
      {name:'Pudelpointer'},
      {name:'Pug'},
      {name:'Puggle'},
      {name:'Puli'},
      {name:'Pumi'},
      {name:'Pyrenean Mastiff'},
      {name:'Pyrenean Shepherd'},
      {name:'Queensland Heeler'},
      {name:'Rafeiro Do Alentejo'},
      {name:'Rastreador Brasileiro'},
      {name:'Rat Terrier'},
      {name:'Redbone Connhound'},
      {name:'Redtick Coonhound'},
      {name:'Rhodesian Ridgeback'},
      {name:'Rotti Mix'},
      {name:'Rottweiler'},
      {name:'Rough-Coated Bohemain Pointer'},
      {name:'Sabueso Espanol'},
      {name:'Saint Bernard'},
      {name:'Saluki'},
      {name:'Samoyed'},
      {name:'Sanshu'},
      {name:'Sarplaninac'},
      {name:'Schapendoes'},
      {name:'Schillerstovare'},
      {name:'Schipperke'},
      {name:'Schnauzer, Giant'},
      {name:'Schnauzer, Miniature'},
      {name:'Schnauzer, Standard'},
      {name:'Schnoodle'},
      {name:'Scottish Deerhound'},
      {name:'Scottish Terrier'},
      {name:'Sealyham Terrier'},
      {name:'Shar-Pei'},
      {name:'Sheltie'},
      {name:'Shetland Sheepdog'},
      {name:'Shiba Inu Dog'},
      {name:'Shih Tzu'},
      {name:'Shihpoo'},
      {name:'Shiloh Shepherd'},
      {name:'Siberian Husky'},
      {name:'Silky Terrier'},
      {name:'Skye Terrier'},
      {name:'Sloughi'},
      {name:'Slovak Tchouvatch'},
      {name:'Smalandsstovare'},
      {name:'Small Continental Spaniel'},
      {name:'Small Gray Elk Dog'},
      {name:'Small Spitz'},
      {name:'Small Swiss Hound'},
      {name:'Smooth-Haired Istrian Hound'},
      {name:'Smooth-Muzzled Pyreness Sheepdog'},
      {name:'Soft Coated Wheaten'},
      {name:'Soft-Coated Griffon'},
      {name:'Somerset Harrier'},
      {name:'Sount African Boerboel'},
      {name:'South Russian Ovcharka'},
      {name:'Spanish Greyhound'},
      {name:'Spinone Italiano'},
      {name:'Staby-hound'},
      {name:'Staffordshire Bull Terrier'},
      {name:'Steinbracke'},
      {name:'Stichelhaar'},
      {name:'Sussex Spaniel'},
      {name:'Swedish Elkhound'},
      {name:'Swedish Shepherd'},
      {name:'Swedish Vallhund'},
      {name:'Swiss Hound'},
      {name:'Tamaskan'},
      {name:'Tatra Sheepdog'},
      {name:'Thai Ridgeback'},
      {name:'Tibetan Mastiff'},
      {name:'Tibetan Spaniel'},
      {name:'Tibetan Terrier'},
      {name:'Tosa Inu'},
      {name:'Trasylvania Hound'},
      {name:'Toy Terrier'},
      {name:'Treeing Tennessee Brindle'},
      {name:'Treeing Walker Connhound'},
      {name:'Trigg Hound'},
      {name:'Tyrolean Hound'},
      {name:'Valee Sheepdog'},
      {name:'Vizsla'},
      {name:'Volpino Italiano'},
      {name:'Weimaraner'},
      {name:'Welsh Corgi, Cardigan'},
      {name:'Welsh Corgi, Pembroke'},
      {name:'Welsh Springer Spaniel'},
      {name:'Welsh Terrier'},
      {name:'West Highland WHite Terrier'},
      {name:'Westie'},
      {name:'Westiepoo'},
      {name:'Wetterhound'},
      {name:'Whippet'},
      {name:'Wirehaired Pointing Griffon'},
      {name:'Wirehaired Styrian Mountain Hound'},
      {name:'Wolf Hybrid'},
      {name:'Xoloitzcuintli'},
      {name:'Yorkiepoo'},
      {name:'Yorkshire Terrier'},
      {name:'Yugoslavian Mountain Hound'},
      {name:'Yugoslavian Triecolor Hound'}
    ]
  } // End of controller
