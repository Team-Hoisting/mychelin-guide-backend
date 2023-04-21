let stores = [
  {
    storeId: '26571895', // 카카오 API의 매장 id
    storeName: '더백푸드트럭 해방촌점',
    address: '서울 용산구 신흥로20길 45 1,2층',
    firstUserId: 'rok.ksohn@gmail.com', // 최초 투표자, users의 email
    phoneNumber: '02-777-3338',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/0.%EB%8D%94%EB%B0%B1%ED%91%B8%EB%93%9C%ED%8A%B8%EB%9F%AD%20%ED%95%B4%EB%B0%A9%EC%B4%8C%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '27514796',
    storeName: '더로열푸드앤드링크',
    address: '서울 용산구 신흥로20길 37 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '070-7774-4168',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/1.%EB%8D%94%EB%A1%9C%EC%97%B4%ED%91%B8%EB%93%9C%EC%95%A4%EB%93%9C%EB%A7%81%ED%81%AC.jpeg?raw=true',
  },
  {
    storeId: '589846825',
    storeName: '포크너 본점',
    address: '경기 안산시 단원구 예술대학로 11 해남빌딩 112호',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-401-4752',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/2.%ED%8F%AC%ED%81%AC%EB%84%88%20%EB%B3%B8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '20328809',
    storeName: '키무스시',
    address: '경기 안산시 단원구 고잔2길 38 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-411-0603',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/3.%ED%82%A4%EB%AC%B4%EC%8A%A4%EC%8B%9C.jpeg?raw=true',
  },
  {
    storeId: '427510472',
    storeName: '송산스시',
    address: '경기 화성시 꽃내음2길 24 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-355-1635',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/4.%EC%86%A1%EC%82%B0%EC%8A%A4%EC%8B%9C.jpeg?raw=true',
  },
  {
    storeId: '682483214',
    storeName: '민속왕순대',
    address: '경기 수원시 영통구 매탄로 61',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-213-5279',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/5.%EB%AF%BC%EC%86%8D%EC%99%95%EC%88%9C%EB%8C%80.jpg?raw=true',
  },
  {
    storeId: '19037502',
    storeName: '브릭오븐',
    address: '서울 강남구 강남대로102길 31',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '02-508-1325',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/6.%EB%B8%8C%EB%A6%AD%EC%98%A4%EB%B8%90.jpeg?raw=true',
  },
  {
    storeId: '1130537615',
    storeName: '멕시칼리',
    address: '서울 광진구 능동로36길 181 1층 멕시칼리',
    firstUserId: '위에 아이디(최초투표자)',
    phoneNumber: '070-7623-1707',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/7.%EB%A9%95%EC%8B%9C%EC%B9%BC%EB%A6%AC.jpeg?raw=true',
  },
  {
    storeId: '21180713',
    storeName: '포나향 안산한대점',
    address: '경기 안산시 상록구 성안길 81',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-407-5021',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/8.%ED%8F%AC%EB%82%98%ED%96%A5%20%EC%95%88%EC%82%B0%ED%95%9C%EB%8C%80%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '26356307',
    storeName: '마담드삼겹',
    address: '인천 연수구 컨벤시아대로 50 푸르지오월드마크 151,168,169호',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '032-832-3592',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/9.%EB%A7%88%EB%8B%B4%EB%93%9C%EC%82%BC%EA%B2%B9.jpeg?raw=true',
  },
  {
    storeId: '1453970380',
    storeName: '엄마손순대',
    address: '전북 전주시 덕진구 솔내7길 10-1',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '063-274-1131',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/10.%EC%97%84%EB%A7%88%EC%86%90%EC%88%9C%EB%8C%80.jpg?raw=true',
  },
  {
    storeId: '984709951',
    storeName: '싱싱전포차',
    address: '경기 수원시 영통구 신원로 98',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-206-2526',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/11.%EC%8B%B1%EC%8B%B1%EC%A0%84%ED%8F%AC%EC%B0%A8.jpeg?raw=true',
  },
  {
    storeId: '21366133',
    storeName: '소문난대구왕뽈찜',
    address: '경기 수원시 영통구 영통로102번길 37-20 1, 2층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '010-3391-3468',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/12.%EC%86%8C%EB%AC%B8%EB%82%9C%EB%8C%80%EA%B5%AC%EC%99%95%EB%BD%88%EC%B0%9C.jpg?raw=true',
  },
  {
    storeId: '1855041852',
    storeName: '훈이네구이',
    address: '경기 수원시 영통구 영통로130번길 29',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-203-9700',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/13.%ED%9B%88%EC%9D%B4%EB%84%A4%EA%B5%AC%EC%9D%B4.jpeg?raw=true',
  },
  {
    storeId: '2092147534',
    storeName: '미나리고사리솥뚜껑생삼겹살',
    address: '경기 화성시 지산2길 5',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-376-9252',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/14.%EB%AF%B8%EB%82%98%EB%A6%AC%EA%B3%A0%EC%82%AC%EB%A6%AC%EC%86%A5%EB%9A%9C%EA%BB%91%EC%83%9D%EC%82%BC%EA%B2%B9%EC%82%B4.jpeg?raw=true',
  },
  {
    storeId: '1386103378',
    storeName: '일품등심',
    address: '경기 군포시 곡란로8번길 42 1층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-397-0606',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/15.%EC%9D%BC%ED%92%88%EB%93%B1%EC%8B%AC.jpeg?raw=true',
  },
  {
    storeId: '971062870',
    storeName: '우판등심 수원점',
    address: '경기 수원시 영통구 권선로908번길 10',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-204-0086',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/16.%EC%9A%B0%ED%8C%90%EB%93%B1%EC%8B%AC%20%EC%88%98%EC%9B%90%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1798961498',
    storeName: '홍화루',
    address: '경기 수원시 영통구 매여울로40번길 56',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-216-3320',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/17.%ED%99%8D%ED%99%94%EB%A3%A8.jpeg?raw=true',
  },
  {
    storeId: '11162155',
    storeName: '장안통닭',
    address: '경기 수원시 팔달구 팔달문로3번길 42 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-252-5190',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/18.%EC%9E%A5%EC%95%88%ED%86%B5%EB%8B%AD.jpg?raw=true',
  },
  {
    storeId: '1349950333',
    storeName: '팜투하녹',
    address: '경기 수원시 팔달구 신풍로23번길 63-18 1,2층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '010-8654-8120',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/19.%ED%8C%9C%ED%88%AC%ED%95%98%EB%85%B9.jpeg?raw=true',
  },
  {
    storeId: '14513092',
    storeName: '그로또',
    address: '경기 수원시 영통구 청명북로 2 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-205-7220',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/20.%EA%B7%B8%EB%A1%9C%EB%98%90.jpeg?raw=true',
  },
  {
    storeId: '19499643',
    storeName: '코끼리분식',
    address: '경기 수원시 권선구 매실로 57',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-294-2796',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/21.%EC%BD%94%EB%81%BC%EB%A6%AC%EB%B6%84%EC%8B%9D.jpeg?raw=true',
  },
  {
    storeId: '1490921549',
    storeName: '호랑이분식 서현본점',
    address: '경기 성남시 분당구 서현로 204',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-702-2221',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/22.%ED%98%B8%EB%9E%91%EC%9D%B4%EB%B6%84%EC%8B%9D%20%EC%84%9C%ED%98%84%EB%B3%B8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '16273915',
    storeName: '25시병천순대국',
    address: '경기 성남시 분당구 분당로53번길 15 산호트윈스1 1층 114,115호',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-706-7363',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/23.25%EC%8B%9C%EB%B3%91%EC%B2%9C%EC%88%9C%EB%8C%80%EA%B5%AD.jpeg?raw=true',
  },
  {
    storeId: '8187153',
    storeName: '고인돌',
    address: '경기 용인시 수지구 성복2로76번길 25-13',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-276-0446',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/24.%EA%B3%A0%EC%9D%B8%EB%8F%8C.jpg?raw=true',
  },
  {
    storeId: '497570902',
    storeName: '비스트로302',
    address: '경기 군포시 산본로 329 경원빌딩 1층 10호',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '070-7779-4669',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/25.%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C302.jpeg?raw=true',
  },
  {
    storeId: '8149629',
    storeName: '항아리보쌈 본점',
    address: '경기 수원시 영통구 영통로130번길 17 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-205-1998',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/26.%ED%95%AD%EC%95%84%EB%A6%AC%EB%B3%B4%EC%8C%88%20%EB%B3%B8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1314518762',
    storeName: '남도김치찜',
    address: '경기 수원시 영통구 매탄로37번길 10-2',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/27.%EB%82%A8%EB%8F%84%EA%B9%80%EC%B9%98%EC%B0%9C.jpg?raw=true',
  },
  {
    storeId: '231113168',
    storeName: '작은집이자카야',
    address: '경기 수원시 영통구 청명북로7번길 16-2 1층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-308-2222',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/28.%EC%9E%91%EC%9D%80%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC.jpg?raw=true',
  },
  {
    storeId: '21298181',
    storeName: '뉴델리',
    address: '경기 수원시 영통구 봉영로 1606 125호',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '031-202-6888',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/29.%EB%89%B4%EB%8D%B8%EB%A6%AC.png?raw=true',
  },
  {
    storeId: '23701213',
    storeName: '영스피제리아',
    address: '경기 수원시 팔달구 신풍로23번길 26 1층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '031-251-9061',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/30.%EC%98%81%EC%8A%A4%ED%94%BC%EC%A0%9C%EB%A6%AC%EC%95%84.jpg?raw=true',
  },
  {
    storeId: '13288545',
    storeName: '풍년닭도리탕',
    address: '서울 중구 세종대로14길 17-5 1층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-755-5278',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/31.%ED%92%8D%EB%85%84%EB%8B%AD%EB%8F%84%EB%A6%AC%ED%83%95.jpeg?raw=true',
  },
  {
    storeId: '491141513',
    storeName: '명동참숯92닭갈비 명동본점',
    address: '서울 중구 명동7길 21 아르누보센텀 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '02-318-7295',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/32.%EB%AA%85%EB%8F%99%EC%B0%B8%EC%88%AF92%EB%8B%AD%EA%B0%88%EB%B9%84%20%EB%AA%85%EB%8F%99%EB%B3%B8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1976028871',
    storeName: '오복수산참치 여의도점',
    address: '서울 영등포구 의사당대로 83 오투타워 2층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '02-783-9988',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/33.%EC%98%A4%EB%B3%B5%EC%88%98%EC%82%B0%EC%B0%B8%EC%B9%98%20%EC%97%AC%EC%9D%98%EB%8F%84%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '287476545',
    storeName: '그릴드300',
    address: '서울 마포구 동교로 230 2층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-3144-2530',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/34.%EA%B7%B8%EB%A6%B4%EB%93%9C300.jpeg?raw=true',
  },
  {
    storeId: '15526158',
    storeName: '망원동즉석우동전문돈까스 본점',
    address: '서울 마포구 동교로 83 1층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-336-1330',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/35.%EB%A7%9D%EC%9B%90%EB%8F%99%EC%A6%89%EC%84%9D%EC%9A%B0%EB%8F%99%EC%A0%84%EB%AC%B8%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EB%B3%B8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '27099765',
    storeName: '시후쿠 신용산점',
    address: '서울 용산구 한강대로15길 9-16 ',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-794-8848',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/36.%EC%8B%9C%ED%9B%84%EC%BF%A0%20%EC%8B%A0%EC%9A%A9%EC%82%B0%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '14733302',
    storeName: '장어촌',
    address: '경기 수원시 팔달구 인계로94번길 27-27 1층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-336-1330',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/37.%EC%9E%A5%EC%96%B4%EC%B4%8C.jpeg?raw=true',
  },
  {
    storeId: '10915533',
    storeName: '행화촌',
    address: '경기 수원시 팔달구 권광로180번길 42-7',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '031-239-4900',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/38.%ED%96%89%ED%99%94%EC%B4%8C.jpeg?raw=true',
  },
  {
    storeId: '10684837',
    storeName: '유치회관',
    address: '경기 수원시 팔달구 효원로292번길 67 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '031-234-6275',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/39.%EC%9C%A0%EC%B9%98%ED%9A%8C%EA%B4%80.png?raw=true',
  },
  {
    storeId: '1648266796',
    storeName: '육품',
    address: '서울 서초구 강남대로65길 12 2층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-6949-6582',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/40.%EC%9C%A1%ED%92%88.jpeg?raw=true',
  },
  {
    storeId: '1697940758',
    storeName: '비어룸',
    address: '서울 강남구 강남대로98길 22',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '0507-1429-5956',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/41.%EB%B9%84%EC%96%B4%EB%A3%B8.jpeg?raw=true',
  },
  {
    storeId: '504236629',
    storeName: '왕스펍',
    address: '서울 강남구 강남대로98길 11',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-538-2888',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/42.%EC%99%95%EC%8A%A4%ED%8E%8D.jpeg?raw=true',
  },
  {
    storeId: '263830255',
    storeName: '강남곱',
    address: '서울 강남구 역삼로3길 12 1, 2층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-538-7592',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/43.%EA%B0%95%EB%82%A8%EA%B3%B1.jpeg?raw=true',
  },
  {
    storeId: '25550206',
    storeName: '아방궁',
    address: '서울 강남구 역삼로1길 18',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-568-0772',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/44.%EC%95%84%EB%B0%A9%EA%B6%81.jpeg?raw=true',
  },
  {
    storeId: '1912522814',
    storeName: '베트남이랑',
    address: '서울 서초구 서초대로77길 15 대경빌딩 지하1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-6949-6582',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/45.%EB%B2%A0%ED%8A%B8%EB%82%A8%EC%9D%B4%EB%9E%91.jpeg?raw=true',
  },
  {
    storeId: '13499124',
    storeName: '아실라',
    address: '서울 강남구 강남대로98길 16 파빌리온빌딩 지하1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-508-4665',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/46.%EC%95%84%EC%8B%A4%EB%9D%BC.jpeg?raw=true',
  },
  {
    storeId: '487052758',
    storeName: '강남진해장',
    address: '서울 강남구 테헤란로5길 11',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-557-2662',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/47.%EA%B0%95%EB%82%A8%EC%A7%84%ED%95%B4%EC%9E%A5.jpeg?raw=true',
  },
  {
    storeId: '8086138',
    storeName: '조양관',
    address: '서울 서초구 서초대로74길 29 서초파라곤오피스텔 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-3473-8181',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/48.%EC%A1%B0%EC%96%91%EA%B4%80.jpeg?raw=true',
  },
  {
    storeId: '1378177446',
    storeName: '더메리어',
    address: '서울 강남구 논현로68길 5 지하1층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-335-3600',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/49.%EB%8D%94%EB%A9%94%EB%A6%AC%EC%96%B4.jpeg?raw=true',
  },
  {
    storeId: '1885154773',
    storeName: '보물베이커리',
    address: '서울 강남구 논현로67길 11 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-558-0301',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/50.%EB%B3%B4%EB%AC%BC%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC.jpeg?raw=true',
  },
  {
    storeId: '1367196580',
    storeName: '천진영감',
    address: '서울 강남구 봉은사로6길 26 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-568-0355',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/51.%EC%B2%9C%EC%A7%84%EC%98%81%EA%B0%90.jpeg?raw=true',
  },
  {
    storeId: '27455203',
    storeName: '왓쇼이켄',
    address: '서울 강남구 테헤란로4길 46 쌍용플래티넘밸류상가 B120호',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-508-5127',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/52.%20%EC%99%93%EC%87%BC%EC%9D%B4%EC%BC%84.jpeg?raw=true',
  },
  {
    storeId: '8015540',
    storeName: '오무리안',
    address: '서울 강남구 논현로79길 66',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-569-8610',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/53.%EC%98%A4%EB%AC%B4%EB%A6%AC%EC%95%88.jpeg?raw=true',
  },
  {
    storeId: '23293789',
    storeName: '꼬끼꼬끼치킨호프 ',
    address: '서울 강남구 테헤란로4길 25',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '02-565-5687',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/54.%EA%BC%AC%EB%81%BC%EA%BC%AC%EB%81%BC%EC%B9%98%ED%82%A8%ED%98%B8%ED%94%84.jpeg?raw=true',
  },
  {
    storeId: '1804081660',
    storeName: '멜팅피자',
    address: '서울 강남구 강남대로62길 22 황산빌딩 1층 102호',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '070-8880-3838',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/55.%EB%A9%9C%ED%8C%85%ED%94%BC%EC%9E%90.jpeg?raw=true',
  },
  {
    storeId: '553953483',
    storeName: '피자아이코닉',
    address: '서울 강남구 언주로 615 논현 아이파크 103동 B131호',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '02-547-0108',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/56.%ED%94%BC%EC%9E%90%EC%95%84%EC%9D%B4%EC%BD%94%EB%8B%89.jpeg?raw=true',
  },
  {
    storeId: '1963568153',
    storeName: '러빙헛 역삼점',
    address: '서울 강남구 테헤란로14길 48 1층 103호',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-502-8858',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/57.%EB%9F%AC%EB%B9%99%ED%97%9B%20%EC%97%AD%EC%82%BC%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1153109923',
    storeName: '프레드피자 서울강남점',
    address: '서울 강남구 봉은사로49길 26 A동 지하 1층 101호',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '070-4795-9809',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/58.%ED%94%84%EB%A0%88%EB%93%9C%ED%94%BC%EC%9E%90.jpeg?raw=true',
  },
  {
    storeId: '720883151',
    storeName: '슈퍼두퍼버거 강남점',
    address: '서울 서초구 강남대로 463 리젠타워 1,2층 101,201,202호',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-336-5576',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/59.%EC%8A%88%ED%8D%BC%EB%91%90%ED%8D%BC%EB%B2%84%EA%B1%B0%20%EA%B0%95%EB%82%A8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '218274780',
    storeName: '바스버거 역삼점 ',
    address: '서울 강남구 테헤란로26길 10 성보빌딩 지하1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-568-6654',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/60.%EB%B0%94%EC%8A%A4%EB%B2%84%EA%B1%B0%20%EC%97%AD%EC%82%BC%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '431631970',
    storeName: '스매쉬치즈버거',
    address: '서울 강남구 강남대로94길 89 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-556-6682',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/61.%EC%8A%A4%EB%A7%A4%EC%89%AC%EC%B9%98%EC%A6%88%EB%B2%84%EA%B1%B0.jpeg?raw=true',
  },
  {
    storeId: '915707641',
    storeName: '듀크버거',
    address: '서울 강남구 도곡로17길 29 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-2088-3349',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/62.%EB%93%80%ED%81%AC%EB%B2%84%EA%B1%B0.jpeg?raw=true',
  },
  {
    storeId: '63121054',
    storeName: '오샐러드 강남점',
    address: '서울 강남구 강남대로84길 15',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-2039-5453',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/63.%EC%98%A4%EC%83%90%EB%9F%AC%EB%93%9C%20%EA%B0%95%EB%82%A8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1641451756',
    storeName: '레이지 요거트',
    address: '서울 강남구 역삼로 109 105호',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '070-4123-5560',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/64.%EB%A0%88%EC%9D%B4%EC%A7%80%20%EC%9A%94%EA%B1%B0%ED%8A%B8.jpeg?raw=true',
  },
  {
    storeId: '2104936093',
    storeName: '하우마라탕',
    address: '서울 강남구 강남대로94길 23 2층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-6082-7071',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/65.%ED%95%98%EC%9A%B0%EB%A7%88%EB%9D%BC%ED%83%95.jpeg?raw=true',
  },
  {
    storeId: '625712749',
    storeName: '봉구가래떡볶이 강남역삼점',
    address: '서울 강남구 역삼로4길 22 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/66.%EB%B4%89%EA%B5%AC%EA%B0%80%EB%9E%98%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EA%B0%95%EB%82%A8%EC%97%AD%EC%82%BC%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1310208191',
    storeName: '하노이스토리',
    address: '서울 강남구 논현로85길 25 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-539-5525',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/67.%ED%95%98%EB%85%B8%EC%9D%B4%EC%8A%A4%ED%86%A0%EB%A6%AC.jpeg?raw=true',
  },
  {
    storeId: '1878339483',
    storeName: '강남역파스타',
    address: '서울 서초구 서초대로73길 24 지하1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-3482-0959',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/68.%EA%B0%95%EB%82%A8%EC%97%AD%ED%8C%8C%EC%8A%A4%ED%83%80.jpeg?raw=true',
  },
  {
    storeId: '301531935',
    storeName: '마초쉐프 강남본점',
    address: '서울 강남구 강남대로106길 29 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-566-8886',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/69.%EB%A7%88%EC%B4%88%EC%89%90%ED%94%84%20%EA%B0%95%EB%82%A8%EB%B3%B8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '2061169084',
    storeName: '샐러드박스 마포광흥창점',
    address: '서울 마포구 창전로 44 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-717-4909',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/70.%EC%83%90%EB%9F%AC%EB%93%9C%EB%B0%95%EC%8A%A4%20%EB%A7%88%ED%8F%AC%EA%B4%91%ED%9D%A5%EC%B0%BD%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '27315733',
    storeName: '경주식당',
    address: '서울 마포구 와우산로13길 49-7',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-322-1674',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/71.%EA%B2%BD%EC%A3%BC%EC%8B%9D%EB%8B%B9.jpeg?raw=true',
  },
  {
    storeId: '474254018',
    storeName: '손오공마라탕 서교점',
    address: '서울 마포구 잔다리로6길 23 2층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-336-4888',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/72.%EC%86%90%EC%98%A4%EA%B3%B5%EB%A7%88%EB%9D%BC%ED%83%95%20%EC%84%9C%EA%B5%90%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '913901166',
    storeName: '용용선생 신촌점',
    address: '서울 서대문구 연세로7길 20',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-336-4888',
    imgUrl: '',
  },
  {
    storeId: '763211643',
    storeName: '또보겠지떡볶이집 붕붕허니비점',
    address: '서울 마포구 양화로19길 22-25 2층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '',
    imgUrl: '',
  },
  {
    storeId: '661872026',
    storeName: '해피치즈스마일 연남점',
    address: '서울 마포구 동교로 244-1 2층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-6369-5656',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/75.%ED%95%B4%ED%94%BC%EC%B9%98%EC%A6%88%EC%8A%A4%EB%A7%88%EC%9D%BC%20%EC%97%B0%EB%82%A8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1055005741',
    storeName: '아라치 공덕점',
    address: '서울 마포구 만리재로 86 1층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-2088-4962',
    imgUrl: '',
  },
  {
    storeId: '954522598',
    storeName: '토끼정 KTX서울역사점',
    address: '서울 중구 한강대로 405 2층 213호',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-362-9401',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/77.%ED%86%A0%EB%81%BC%EC%A0%95%20KTX%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1694359692',
    storeName: '펄시티버거',
    address: '서울 마포구 동교로39길 7 1층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-6275-7510',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/78.%ED%8E%84%EC%8B%9C%ED%8B%B0%EB%B2%84%EA%B1%B0.jpeg?raw=true',
  },
  {
    storeId: '21236405',
    storeName: '기꾸스시',
    address: '서울 강남구 테헤란로 614 지하2층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '02-564-3377',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/79.%EA%B8%B0%EA%BE%B8%EC%8A%A4%EC%8B%9C.jpeg?raw=true',
  },
  {
    storeId: '17968277',
    storeName: '대성이네',
    address: '서울 서대문구 연세로5나길 33',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '02-325-9658',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/80.%EB%8C%80%EC%84%B1%EC%9D%B4%EB%84%A4.jpeg?raw=true',
  },
  {
    storeId: '26966117',
    storeName: '버터밀크',
    address: '서울 마포구 와우산로 130 1층',
    firstUserId: 'rok.ksohn@gmail.com',
    phoneNumber: '',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/81.%EB%B2%84%ED%84%B0%EB%B0%80%ED%81%AC.jpeg?raw=true',
  },
  {
    storeId: '1742465670',
    storeName: '포36거리 숙대점',
    address: '서울 용산구 청파로47길 77 2층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-701-4328',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/82.%ED%8F%AC36%EA%B1%B0%EB%A6%AC%20%EC%88%99%EB%8C%80%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '23931288',
    storeName: '커피니 숙대점',
    address: '서울 용산구 청파로47길 66',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-703-7061',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/83.%EC%BB%A4%ED%94%BC%EB%8B%88%20%EC%88%99%EB%8C%80%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '864100804',
    storeName: '고부기 대학로본점',
    address: '서울 종로구 동숭길 76 1층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '070-7575-0578',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/84.%EA%B3%A0%EB%B6%80%EA%B8%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EB%B3%B8%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1859634829',
    storeName: '라멘트럭 상수본점',
    address: '서울 마포구 독막로14길 31 1층',
    firstUserId: 'bin000527@naver.com',
    phoneNumber: '02-336-8456',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/85.%EB%9D%BC%EB%A9%98%ED%8A%B8%EB%9F%AD%20%EC%83%81%EC%88%98%EB%B3%B8%EC%A0%90.png?raw=true',
  },
  {
    storeId: '1908121915',
    storeName: '문일리',
    address: '서울 마포구 연남로13길 9 102호',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '0507-1444-6555',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/86.%EB%AC%B8%EC%9D%BC%EB%A6%AC.jpeg?raw=true',
  },
  {
    storeId: '19153287',
    storeName: '산까치냉면',
    address: '서울 마포구 도화길 35',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/87.%EC%82%B0%EA%B9%8C%EC%B9%98%EB%83%89%EB%A9%B4.jpeg?raw=true',
  },
  {
    storeId: '1247140514',
    storeName: '연남닭발',
    address: '서울 서대문구 연희로 34',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-337-0557',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/88.%EC%97%B0%EB%82%A8%EB%8B%AD%EB%B0%9C.jpeg?raw=true',
  },
  {
    storeId: '26235884',
    storeName: '피오니 홍대점',
    address: '서울 마포구 독막로7길 51 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-333-5325',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/89.%ED%94%BC%EC%98%A4%EB%8B%88%20%ED%99%8D%EB%8C%80%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '24546118',
    storeName: '와우신내떡',
    address: '서울 용산구 청파로45길 12-1 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-704-8485',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/90.%EC%99%80%EC%9A%B0%EC%8B%A0%EB%82%B4%EB%96%A1.jpeg?raw=true',
  },
  {
    storeId: '735994320',
    storeName: '홍곱창 숙명여대점',
    address: '서울 용산구 청파로43가길 31',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-707-0092',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/91.%ED%99%8D%EA%B3%B1%EC%B0%BD%20%EC%88%99%EB%AA%85%EC%97%AC%EB%8C%80%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '1736742094',
    storeName: '마녀주방 홍대점',
    address: '서울 마포구 와우산로21길 36-10 1, 2층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/92.%EB%A7%88%EB%85%80%EC%A3%BC%EB%B0%A9%20%ED%99%8D%EB%8C%80%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '27341509',
    storeName: '아웃닭 신촌역점',
    address: '서울 서대문구 연세로4길 19 1층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/93.%EC%95%84%EC%9B%83%EB%8B%AD%20%EC%8B%A0%EC%B4%8C%EC%97%AD%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '15110084',
    storeName: '탑클라우드23',
    address: '서울 마포구 백범로 192 에스오일빌딩 23층',
    firstUserId: 'alswl99710@naver.com',
    phoneNumber: '02-3275-2323',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/94.%ED%83%91%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C23.jpeg?raw=true',
  },
  {
    storeId: '27494588',
    storeName: '아이엠베이글 공덕점',
    address: '서울 마포구 백범로 152 공덕파크자이 101동',
    firstUserId: 'sanbondeveloper@gmail.com;',
    phoneNumber: '070-7718-2881',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/95.%EC%95%84%EC%9D%B4%EC%97%A0%EB%B2%A0%EC%9D%B4%EA%B8%80%20%EA%B3%B5%EB%8D%95%EC%A0%90.jpeg?raw=true',
  },
  {
    storeId: '13123075',
    storeName: '더함',
    address: '서울 용산구 청파로47길 52 명신플라자 2층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-707-3692',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/96.%EB%8D%94%ED%95%A8.jpeg?raw=true',
  },
  {
    storeId: '1165755646',
    storeName: '만동제과',
    address: '서울 서대문구 연희로 32 1층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-6489-2334',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/97.%EB%A7%8C%EB%8F%99%EC%A0%9C%EA%B3%BC.jpeg?raw=true',
  },
  {
    storeId: '2010386564',
    storeName: '멕시코식당',
    address: '서울 마포구 독막로2길 23 1층',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-336-3666',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/98.%EB%A9%95%EC%8B%9C%EC%BD%94%EC%8B%9D%EB%8B%B9.jpeg?raw=true',
  },
  {
    storeId: '27253757',
    storeName: '여우골 홍대점',
    address: '서울 마포구 와우산로19길 9',
    firstUserId: 'sanbondeveloper@gmail.com',
    phoneNumber: '02-325-8717',
    imgUrl:
      'https://github.com/Team-Hoisting/mychelin-guide-storage/blob/main/storeImages/99.%EC%97%AC%EC%9A%B0%EA%B3%A8%20%ED%99%8D%EB%8C%80%EC%A0%90.jpeg?raw=true',
  },
];

const getStores = () => stores;

const findStoreById = (id) => stores.find((store) => store.storeId === id);

module.exports = {
  getStores,
  findStoreById,
};
