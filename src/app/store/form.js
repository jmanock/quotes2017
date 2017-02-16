angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });

  function FormCtrl($scope){
    /*
      - More than one Question at a time
    */
    $scope.so = [
      {Name:'Florida'},
      {Name:'Illinois'},
      {Name:'Georiga'}
    ]
    $scope.Name = function(DogName){
      console.log(DogName);
      $scope.age = true;
      $scope.name = true;
    }

    $scope.Age = function(DogName){
      $scope.weight = true;
      $scope.age = false;
      console.log(DogName);
    }

    $scope.Weight = function(DogName){
      console.log(DogName);
      $scope.weight = false;
      $scope.state = true;
    }

    // $scope.State = function(DogName){
    //   $scope.state = false;
    //   $scope.breed = true;
    //   console.log(DogName);
    // }
    //
    // $scope.Breeds = function(DogName){
    //   $scope.breed = false;
    //   $scope.color = true;
    //   console.log(DogName);
    // }

    $scope.Color = function(DogName){
      console.log(DogName);
      $scope.color = false;
      $scope.gender = true;
    }

    $scope.Gender = function(DogName){
      console.log(DogName);
    }
    $scope.Something = function(DogName){
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
      {name:''}

      <option value='FrenchBulldog'>French Bulldog</option>
      <option value='FrenchPointer'>French Pointer</option>
      <option value='FrenchSpaniel'>French Spaniel</option>
      <option value='GammelDanskHonsehund'>Gammel Dansk Honsehund</option>
      <option value='GermanHovawart'>German Hovawart</option>
      <option value='GermanHuntingTerrier'>German Hunting Terrier</option>
      <option value='GermanLong-HairedPointer'>German Long-Haired Pointer</option>
      <option value='GermanPinscher'>German Pinscher</option>
      <option value='GermanShepherd'>German Shepherd</option>
      <option value='GermanShepherdMix'>German Shepherd Mix</option>
      <option value='GermanShorthairedPointer'>German Shorthaired Pointer</option>
      <option value='GermanSpaniel'>German Spaniel</option>
      <option value='GermanWirehairedPointer'>German Wirehaired Pointer</option>
      <option value='GlenOfImaalTerrier'>Glen of Imaal Terrier</option>
      <option value='GoldenRetriever'>Golden Retriever</option>
      <option value='Goldendoodle'>Goldendoodle</option>
      <option value='GordonSetter'>Gordon Setter</option>
      <option value='GrandAnglo-Francais'>Grand Anglo-Francais</option>
      <option value='GrandBleuDeGascogne'>Grand Bleu De Gascogne</option>
      <option value='GrandGasconSaintongeois'>Grand Gascon Saintongeois</option>
      <option value='GrandGriffonVendeen'>Grand Griffon Vendeen</option>
      <option value='GreatDane'>Great Dane</option>
      <option value='GreatPyrenees'>Great Pyrenees</option>
      <option value='GreatSpitz'>Great Spitz</option>
      <option value='GreaterSwissMountainDog'>Greater Swiss Mountain Dog</option>
      <option value='GreekHound'>Greek Hound</option>
      <option value='Greenland'>Greenland</option>
      <option value='Greyhound'>Greyhound</option>
      <option value='GriffonBrabancon'>Griffon Brabancon</option>
      <option value='GriffonFauveDeBretagne'>Griffon Fauve De Bretagne</option>
      <option value='GriffonNivernais'>Griffon Nivernais</option>
      <option value='GrosserMunsterlander'>Grosser Munsterlander</option>
      <option value='HairlessDog'>Hairless Dog</option>
      <option value='Haldenstover'>Haldenstover</option>
      <option value='HamiltonHound'>Hamilton Hound</option>
      <option value='HanoverHound'>Hanover Hound</option>
      <option value='Harlekinpinscher'>Harlekinpinscher</option>
      <option value='Havanese'>Havanese</option>
      <option value='Heeler'>Heeler</option>
      <option value='Hokkaidoken'>Hokkaidoken</option>
      <option value='Hovawart'>Hovawart</option>
      <option value='HuntTerrier'>Hunt Terrier</option>
      <option value='Hygenhund'>Hygenhund</option>
      <option value='IbizanHound'>Ibizan Hound</option>
      <option value='IcelanSheepdog'>Iceland Sheepdog</option>
      <option value='IllyrianSheepdog'>Illyrian Sheepdog</option>
      <option value='IrishSetter'>Irish Setter</option>
      <option value='IrishTerrier'>Irish Terrier</option>
      <option value='IrishWaterSpaniel'>Irish Water Spaniel</option>
      <option value='IrishWolfhound'>Irish Wolfhound</option>
      <option value='ItalianGreyhound'>Italian Greyhound</option>
      <option value='ItalianHound'>Italian Hound</option>
      <option value='ItalianSpinone'>Italian Spinone</option>
      <option value='JackRussell'>Jack Russell</option>
      <option value='JapaneseChin'>Japanese Chin</option>
      <option value='JapanesseSpitz'>Japanese Spitz</option>
      <option value='Jindo'>Jindo</option>
      <option value='JuraHound'>Jura Hound</option>
      <option value='KaiDog'>Kai Dog</option>
      <option value='KarelianBearDog'>Karelian Bear Dog</option>
      <option value='KarsySheepdog'>Karst Sheepdog</option>
      <option value='Keeshond'>Keeshond</option>
      <option value='KerryBlueTerrier'>Kerry Blue Terrier</option>
      <option value='KishuKen'>Kishu Ken</option>
      <option value='KleninerMusterlander'>Kleiner Musterlander</option>
      <option value='Komondor'>Komondor</option>
      <option value='Kooikerhondje'>Kooikerhondje</option>
      <option value='Kromfohrlander'>Kromfohrlander</option>
      <option value='Kuvasz'>Kuvasz</option>
      <option value='Kyushu'>Kyushu</option>
      <option value='LabMix'>Lab Mix</option>
      <option value='Labradoodle'>Labradoodle</option>
      <option value='LabradorRetriever'>Labrador Retriever</option>
      <option value='LagottoRomagnolo'>Lagotto Romagnolo</option>
      <option value='LakelandTerrier'>Lakeland Terrier</option>
      <option value='LancashireHeeler'>Lancashire Heeler</option>
      <option value='Landseer'>Landseer</option>
      <option value='Laphund'>Lapphund</option>
      <option value='LapponianHerder'>Lapponian Herder</option>
      <option value='Leonberger'>Leonberger</option>
      <option value='Levesque'>Levesque</option>
      <option value='LhasaApso'>Lhasa Apso</option>
      <option value='Lhasapoo'>Lhasapoo</option>
      <option value='LittleLionDog'>Little Lion Dog</option>
      <option value='Lowchen'>Lowchen</option>
      <option value='LucerneseHound'>Lucernese Hound</option>
      <option value='Lundehund'>Lundehund</option>
      <option value='MagyarAgar'>Magyar Agar</option>
      <option value='Malshi'>Malshi</option>
      <option value='Maltese'>Maltese</option>
      <option value='Maltipom'>Maltipom</option>
      <option value='Maltipoo'>Maltipoo</option>
      <option value='ManchesterTerrier'>Manchester Terrier</option>
      <option value='ManchesterTerrierToy'>Manchester Terrier, Toy</option>
      <option value='MaremmaSheepdog'>Maremma Sheepdog</option>
      <option value='Mastiff'>Mastiff</option>
      <option value='McNab'>McNab</option>
      <option value='MexicanHairless'>Mexican Hairless</option>
      <option value='MinatureAmericanShepherd'>Minature American Shepherd</option>
      <option value='MinatureAustralianShepherd'>Minature Australian Shepherd</option>
      <option value='MiniDachshund'>Mini Dachshund</option>
      <option value='MiniatureBullTerrier'>Miniature Bull Terrier</option>
      <option value='MiniaturePinscher'>Miniature Pinscher</option>
      <option value='MiniaturePoodle'>Miniature Poodle</option>
      <option value='MixElevenToTwentyFourPounds'>Mix Eleven to Twenty Four Pounds</option>
      <option value='MixFiftyToSeventyFourPounds'>Mix Fifty to Seventy Four Pounds</option>
      <option value='MixLessTanTenPounds'>Mix less than Ten Pounds</option>
      <option value='MixOneHundredToOneHundredAndFourtyNinePounds'>Mix One Hundred to One Hundred and Fourty Nine Pounds</option>
      <option value='MixOveroneHundredAndFourtyNinePounds'>Mix Over One Hundred and Fourty Nine Pounds</option>
      <option value='MixSeventyFiveToNinetyNinePounds'>Mix Seventy Five to Ninety Nine Pounds</option>
      <option value='MixTwentyFiveToFortyNinePounds'>Mix Twenty Five to Forty Nine Pounds</option>
      <option value='Morkie'>Morkie</option>
      <option value='MountainCur'>Mountain Cur</option>
      <option value='Mudi'>Mudi</option>
      <option value='Munsterlander'>Munsterlander</option>
      <option value='NeapolitanMastiff'>Neapolitan Mastiff</option>
      <option value='NewGuineaSingingDog'>New Guinea Singing Dog</option>
      <option value='Newfoundland'>Newfoundland</option>
      <option value='NorfolkTerrier'>Norfolk Terrier</option>
      <option value='Norrbottenspets'>Norrbottenspets</option>
      <option value='NorskBuhund'>Norsk Buhund</option>
      <option value='NorwegianBuhund'>Norwegian Buhund</option>
      <option value='NorwegianElkhound'>Norwegian Elkhound</option>
      <option value='NorwegianLundehund'>Norwegian Lundehund</option>
      <option value='NorwichTerrier'>Norwich Terrier</option>
      <option value='NovaScotiaDuckTollingRetriever'>Nova Scotia Duck Tolling Retriever</option>
      <option value='OldeEnglishBulldogge'>Olde English Bulldogge</option>
      <option value='OldeEnglishSheepdog'>Olde English Sheepdog</option>
      <option value='Otterhound'>Otterhound</option>
      <option value='Papillon'>Papillon</option>
      <option value='Papoo'>Papoo</option>
      <option value='ParsonRussellTerrier'>Parson Russell Terrier</option>
      <option value='PatterdaleTerrier'>Patterdale Terrier</option>
      <option value='Peek-A-Pom'>Peek-A-Pom</option>
      <option value='Pekepoo'>Pekepoo</option>
      <option value='Pekingese'>Pekingese</option>
      <option value='PerdigueroDeBurgos'>Perdiguero De Burgos</option>
      <option value='PerdigueroPortuges'>Perdiguero Portugues</option>
      <option value='PeruvianIncaOrchid'>Peruvian Inca Orchid</option>
      <option value='PetitAnglo-Francais'>Petit Anglo-Francais</option>
      <option value='PetitBleuDeGascongne'>Petit Bleu De Gascogne</option>
      <option value='PetitGriffonBleuDeGascongne'>Petit Griffon Bleu De Gascogne</option>
      <option value='PetiteBassetGriffon'>Petite Basset Griffon</option>
      <option value='PharaohHound'>Pharaoh Hound</option>
      <option value='PicardySheepdog'>Picardy Sheepdog</option>
      <option value='PicardySpaniel'>Picardy Spaniel</option>
      <option value='Pinscher'>Pinscher</option>
      <option value='PitBull'>Pit Bull</option>
      <option value='PitMix'>Pit Mix</option>
      <option value='PlottHound'>Plott Hound</option>
      <option value='PodencoIbicenco'>Podenco ibicenco</option>
      <option value='PodengoPortugueso'>Podengo Portugueso</option>
      <option value='Pointer'>Pointer</option>
      <option value='Poitevin'>Poitevin</option>
      <option value='PolishHound'>Polish Hound</option>
      <option value='PolishLowlandSheepdog'>Polish Lowland Sheepdog</option>
      <option value='PolishOwczarekNizinny'>Polish Owczarek Nizinny</option>
      <option value='PolishTatraSheepdog'>Polish Tatra Sheepdog</option>
      <option value='Pomchi'>Pomchi</option>
      <option value='Pomeranian'>Pomeranian</option>
      <option value='Pont-AudemereSpaniel'>Pont-Audemere Spaniel</option>
      <option value='PoodleMinature'>Poodle, Minature</option>
      <option value='PoodleStandard'>Poodle, Standard</option>
      <option value='PoodleToy'>Poodle, Toy</option>
      <option value='Porcelaine'>Porcelaine</option>
      <option value='PortuguesePodengo'>Portuguese Podengo</option>
      <option value='PortuguesePointer'>Portuguese Pointer</option>
      <option value='PortugeseWaterDog'>Portuguese Water Dog</option>
      <option value='PosavacHound'>Posavac Hound</option>
      <option value='PresaCanario'>Presa Canario</option>
      <option value='Pudelpointer'>Pudelpointer</option>
      <option value='Pug'>Pug</option>
      <option value='Puggle'>Puggle</option>
      <option value='Puli'>Puli</option>
      <option value='Pumi'>Pumi</option>
      <option value='PyreneanMastiff'>Pyrenean Mastiff</option>
      <option value='PyreneanShepherd'>Pyrenean Shepherd</option>
      <option value='QueenslandHeeler'>Queensland Heeler</option>
      <option value='RafeiroDoALentejo'>Rafeiro Do Alentejo</option>
      <option value='RastreadorBrasileiro'>Rastreador Brasileiro</option>
      <option value='RatTerrier'>Rat Terrier</option>
      <option value='RedboneCoonhound'>Redbone Coonhound</option>
      <option value='RedtickCoonhound'>Redtick Coonhound</option>
      <option value='RhodesianRidgeback'>Rhodesian Ridgeback</option>
      <option value='RottiMix'>Rotti Mix</option>
      <option value='Rottweiler'>Rottweiler</option>
      <option value='Rough-CoatedBohemainPointer'>Rough-Coated Bohemain Pointer</option>
      <option value='SabuesoEspanol'>Sabueso Espanol</option>
      <option value='SaintBernard'>Saint Bernard</option>
      <option value='Saluki'>Saluki</option>
      <option value='Samoyed'>Samoyed</option>
      <option value='Sanshu'>Sanshu</option>
      <option value='Sarplaninac'>Sarplaninac</option>
      <option value='Schapendoes'>Schapendoes</option>
      <option value='Schillerstovare'>Schillerstovare</option>
      <option value='Schipperke'>Schipperke</option>
      <option value='SchnauzerGiant'>Schnauzer, Giant</option>
      <option value='SchnauzerMiniature'>Schnauzer, Miniature</option>
      <option value='SchanuzerStandard'>Schnauzer, Standard</option>
      <option value='Schnoodle'>Schnoodle</option>
      <option value='ScottishDeerhound'>Scottish Deerhound</option>
      <option value='ScottishTerrier'>Scottish Terrier</option>
      <option value='SealyhamTerrier'>Sealyham Terrier</option>
      <option value='Shar-Pei'>Shar-Pei</option>
      <option value='Sheltie'>Sheltie</option>
      <option value='ShetlandSheepdog'>Shetland Sheepdog</option>
      <option value='ShibaInuDogs'>Shiba Inu Dogs</option>
      <option value='ShihTzu'>Shih Tzu</option>
      <option value='Shihpoo'>Shihpoo</option>
      <option value='ShilohShepherd'>Shiloh Shepherd</option>
      <option value='SiberianHusky'>Siberian Husky</option>
      <option value='SilkyTerrier'>Silky Terrier</option>
      <option value='SkyeTerrier'>Skye Terrier</option>
      <option value='Sloughi'>Sloughi</option>
      <option value='SlovakTchouvatch'>Slovak Tchouvatch</option>
      <option value='Smalandsstovare'>Smalandsstovare</option>
      <option value='SmallContinentalSpaniel'>Small Continental Spaniel</option>
      <option value='SmallGrayElkDog'>Small Gray Elk Dog</option>
      <option value='SmallSpitz'>Small Spitz</option>
      <option value='SmallSwissHound'>Small Swiss Hound</option>
      <option value='Smooth-HairedIstrianHound'>Smooth-Haired Istrian Hound</option>
      <option value='Smooth-MuzzledPyreneesSheepdog'>Smooth-Muzzled Pyrenees Sheepdog</option>
      <option value='SoftCoatedWheatenTerrier'>Soft Coated Wheaten Terrier</option>
      <option value='Soft-CoatedGriffon'>Soft-Coated Griffon</option>
      <option value='SomersetHarrier'>Somerset Harrier</option>
      <option value='SouthAfricanBoerboel'>South African Boerboel</option>
      <option value='SouthRussianOvcharka'>South Russian Ovcharka</option>
      <option value='SpanishGreyhound'>Spanish Greyhound</option>
      <option value='SpinoneItaliano'>Spinone Italiano</option>
      <option value='Staby-houn'>Staby-houn</option>
      <option value='StaffordshireBullTerriers'>Staffordshire Bull Terriers</option>
      <option value='Steinbracke'>Steinbracke</option>
      <option value='Stichelhaar'>Stichelhaar</option>
      <option value='SussexSpaniel'>Sussex Spaniel</option>
      <option value='SwedishElkhound'>Swedish Elkhound</option>
      <option value='SwedishShepherd'>Swedish Shepherd</option>
      <option value='SwedishVallhund'>Swedish Vallhund</option>
      <option value='SwisHound'>Swiss Hound</option>
      <option value='Tamaskan'>Tamaskan</option>
      <option value='TatraSheepdog'>Tatra Sheepdog</option>
      <option value='Telomian'>Telomian</option>
      <option value='ThaiRidgeback'>Thai Ridgeback</option>
      <option value='TibetanMastiff'>Tibetan Mastiff</option>
      <option value='TibetanSpaniel'>Tibetan Spaniel</option>
      <option value='TibetanTerrier'>Tibetan Terrier</option>
      <option value='TosaInu'>Tosa Inu</option>
      <option value='ToyTerrier'>Toy Terrier</option>
      <option value='TransylvanianHound'>Transylvanian Hound</option>
      <option value='TreeingTennesseeBrindle'>Treeing Tennessee Brindle</option>
      <option value='TreeingWalkerCoonhound'>Treeing Walker Coonhound</option>
      <option value='TriggHound'>Trigg Hound</option>
      <option value='TyroleanHound'>Tyrolean Hound</option>
      <option value='ValeeSheepdog'>Valee Sheepdog</option>
      <option value='Vizsla'>Vizsla</option>
      <option value='VolpinoItaliano'>Volpino Italiano</option>
      <option value='Weimaraner'>Weimaraner</option>
      <option value='WelshCorgiCardigan'>Welsh Corgi, Cardigan</option>
      <option value='WelshCorgiPembroke'>Welsh Corgi, Pembroke</option>
      <option value='WelshSpringerSpaniel'>Welsh Springer Spaniel</option>
      <option value='WelshTerrier'>Welsh Terrier</option>
      <option value='WestHighlandWhiteTerrier'>West Highland White Terrier</option>
      <option value='Westie'>Westie</option>
      <option value='Westiepoo'>Westiepoo</option>
      <option value='Wetterhoun'>Wetterhoun</option>
      <option value='Whippet'>Whippet</option>
      <option value='WirehairedPointingGriffon'>Wirehaired Pointing Griffon</option>
      <option value='WirehairedStyrianMountainHound'>Wirehaired Styrian Mountain Hound</option>
      <option value='WolfHybrid'>Wolf Hybrid</option>
      <option value='Xoloitzcuintli'>Xoloitzcuintli</option>
      <option value='Yorkiepoo'>Yorkiepoo</option>
      <option value='YorkshireTerrier'>Yorkshire Terrier</option>
      <option value='YugoslavianMountainHound'>Yugoslavian Mountain Hound</option>
      <option value='YugoslacianTricolorHound'>Yugoslavian Tricolor Hound</option>

    ]
  } // End of controller
