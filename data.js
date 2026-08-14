const db = [
  {
    id: 1,
    word: "好ましい",
    reading: "このましい",
    meaning: "바람직하다, 마음에 들다",
    tag: "日常",
    exJa: "<ruby>面接<rt>めんせつ</rt></ruby>では、<ruby>清潔感<rt>せいけつかん</rt></ruby>のある<ruby>服装<rt>ふくそう</rt></ruby>が<ruby>好<rt>この</rt></ruby>ましい。",
    exKo: "면접에서는 청결감이 있는 복장이 바람직하다."
  },
  {
    id: 2,
    word: "しっとりとした",
    reading: "しっとりとした",
    meaning: "촉촉한, 차분한",
    tag: "日常",
    exJa: "<ruby>雨<rt>あめ</rt></ruby>に<ruby>濡<rt>ぬ</rt></ruby>れた<ruby>古<rt>ふる</rt></ruby>い<ruby>街並<rt>まちな</rt></ruby>みは、しっとりとした<ruby>風情<rt>ふぜい</rt></ruby>がある。",
    exKo: "비에 젖은 낡은 거리에는 차분한 정취가 있다."
  },
  {
    id: 3,
    word: "へばりつく",
    reading: "へばりつく",
    meaning: "달라붙다, 들러붙다",
    tag: "日常",
    exJa: "<ruby>汗<rt>あせ</rt></ruby>でシャツが<ruby>背中<rt>せなか</rt></ruby>にへばりついて<ruby>気持<rt>きも</rt></ruby>ち<ruby>悪<rt>わる</rt></ruby>い。",
    exKo: "땀 때문에 셔츠가 등에 들러붙어서 기분이 나쁘다."
  },
  {
    id: 4,
    word: "厄介な",
    reading: "やっかいな",
    meaning: "성가신, 까다로운, 성가신 존재",
    tag: "日常",
    exJa: "<ruby>厄介<rt>やっかい</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>に<ruby>巻<rt>ま</rt></ruby>き<ruby>込<rt>こ</rt></ruby>まれて、すっかり<ruby>疲<rt>つか</rt></ruby>れ<ruby>果<rt>は</rt></ruby>てた。",
    exKo: "성가신 문제에 휘말려서 완전히 지쳐버렸다."
  },
  {
    id: 5,
    word: "無防備",
    reading: "むぼうび",
    meaning: "무방비",
    tag: "日常",
    exJa: "SNSに<ruby>個人情報<rt>こじんじょうほう</rt></ruby>を<ruby>載<rt>の</rt></ruby>せるのは<ruby>無防備<rt>むぼうび</rt></ruby>だと<ruby>言<rt>い</rt></ruby>わざるを<ruby>得<rt>え</rt></ruby>ない。",
    exKo: "SNS에 개인정보를 올리는 것은 무방비하다고 할 수밖에 없다."
  },
  {
    id: 6,
    word: "後ろめたい",
    reading: "うしろめたい",
    meaning: "떳떳하지 못하다, 양심에 가책이 되다",
    tag: "日常",
    exJa: "<ruby>嘘<rt>うそ</rt></ruby>をついて<ruby>遊<rt>あそ</rt></ruby>びに<ruby>行<rt>い</rt></ruby>ったので、<ruby>親<rt>おや</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>後<rt>うし</rt></ruby>ろめたい。",
    exKo: "거짓말을 하고 놀러 갔기 때문에, 부모님에 대해 떳떳하지 못했다."
  },
  {
    id: 7,
    word: "ひょっとすると",
    reading: "ひょっとすると",
    meaning: "어쩌면, 혹시",
    tag: "日常",
    exJa: "ひょっとすると、<ruby>明日<rt>あす</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>で<ruby>中止<rt>ちゅうし</rt></ruby>になるかもしれない。",
    exKo: "어쩌면 내일 시합은 비 때문에 취소될지도 모른다."
  },
  {
    id: 8,
    word: "いらぬ",
    reading: "いらぬ",
    meaning: "쓸데없는, 불필요한 (=いらない)",
    tag: "日常",
    exJa: "<ruby>他人<rt>たにん</rt></ruby>のことにいらぬお<ruby>世話<rt>せわ</rt></ruby>を<ruby>焼<rt>や</rt></ruby>くのはやめなさい。",
    exKo: "남의 일에 쓸데없는 참견을 하는 것은 그만두세요."
  },
  {
    id: 9,
    word: "暗黙",
    reading: "あんもく",
    meaning: "암묵, 말하지 않아도 앎 (dark)",
    tag: "日常",
    exJa: "<ruby>二人<rt>ふたり</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>には、<ruby>誰<rt>だれ</rt></ruby>にも<ruby>言<rt>い</rt></ruby>わないという<ruby>暗黙<rt>あんもく</rt></ruby>の<ruby>了解<rt>りょうかい</rt></ruby>があった。",
    exKo: "두 사람 사이에는 아무에게도 말하지 않는다는 암묵적인 양해가 있었다."
  },
  {
    id: 10,
    word: "改めて",
    reading: "あらためて",
    meaning: "새롭게, 다시금, 정식으로",
    tag: "日常",
    exJa: "<ruby>今日<rt>きょう</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>はこれで<ruby>終了<rt>しゅうりょう</rt></ruby>とし、<ruby>詳細<rt>しょうさい</rt></ruby>は<ruby>改<rt>あらた</rt></ruby>めてご<ruby>連絡<rt>れんらく</rt></ruby>します。",
    exKo: "오늘 회의는 이것으로 종료하고, 상세한 내용은 다시 정식으로 연락드리겠습니다."
  },
  {
    id: 11,
    word: "いわば",
    reading: "いわば",
    meaning: "말하자면, 비유하자면",
    tag: "日常",
    exJa: "<ruby>彼女<rt>かのじょ</rt></ruby>はいわば、クラスのムードメーカーのような<ruby>存在<rt>そんざい</rt></ruby>だ。",
    exKo: "그녀는 말하자면 반의 분위기 메이커 같은 존재다."
  },
  {
    id: 12,
    word: "次第に",
    reading: "しだいに",
    meaning: "차츰, 점차",
    tag: "日常",
    exJa: "<ruby>秋<rt>あき</rt></ruby>が<ruby>深<rt>ふか</rt></ruby>まるにつれて、<ruby>木々<rt>きぎ</rt></ruby>の<ruby>葉<rt>は</rt></ruby>が<ruby>次第<rt>しだい</rt></ruby>に<ruby>赤<rt>あか</rt></ruby>く<ruby>染<rt>そ</rt></ruby>まっていった。",
    exKo: "가을이 깊어짐에 따라, 나무들의 잎이 점차 붉게 물들어 갔다."
  },
  {
    id: 13,
    word: "闇雲に",
    reading: "やみくもに",
    meaning: "무턱대고, 덮어놓고",
    tag: "日常",
    exJa: "<ruby>計画<rt>けいかく</rt></ruby>もなく<ruby>闇雲<rt>やみくも</rt></ruby>に<ruby>努力<rt>どりょく</rt></ruby>しても、<ruby>良<rt>よ</rt></ruby>い<ruby>結果<rt>けっか</rt></ruby>は<ruby>得<rt>え</rt></ruby>られない。",
    exKo: "계획 없이 무턱대고 노력해도 좋은 결과를 얻을 수 없다."
  },
  {
    id: 14,
    word: "しかるべき",
    reading: "しかるべき",
    meaning: "적절한, 마땅한, 사당한",
    tag: "日常",
    exJa: "この<ruby>件<rt>けん</rt></ruby>については、しかるべき<ruby>時期<rt>じき</rt></ruby>に<ruby>公式<rt>こうしき</rt></ruby>な<ruby>発表<rt>はっぴょう</rt></ruby>をいたします。",
    exKo: "이 건에 대해서는 적절한 시기에 공식적인 발표를 하겠습니다."
  },
  {
    id: 15,
    word: "多々",
    reading: "たた",
    meaning: "많음, 대단히",
    tag: "日常",
    exJa: "<ruby>初<rt>はじ</rt></ruby>めての<ruby>仕事<rt>しごと</rt></ruby>で、<ruby>至<rt>いた</rt></ruby>らない<ruby>点<rt>てん</rt></ruby>が<ruby>多々<rt>たた</rt></ruby>あるかと<ruby>存<rt>ぞん</rt></ruby>じます。",
    exKo: "처음 하는 일이라, 부족한 점이 많으리라 생각합니다."
  },
  {
    id: 16,
    word: "植える",
    reading: "うえる",
    meaning: "심다",
    tag: "日常",
    exJa: "<ruby>庭<rt>にわ</rt></ruby>にチューリップの<ruby>種<rt>たね</rt></ruby>を<ruby>植<rt>う</rt></ruby>えて、<ruby>春<rt>はる</rt></ruby>が<ruby>来<rt>く</rt></ruby>るのを<ruby>待<rt>ま</rt></ruby>つ。",
    exKo: "정원에 튤립 씨앗을 심고, 봄이 오기를 기다린다."
  },
  {
    id: 17,
    word: "絶やす",
    reading: "たやす",
    meaning: "끊다, 멸절시키다, 없애다",
    tag: "日常",
    exJa: "どんなに<ruby>苦<rt>くる</rt></ruby>しい<ruby>時<rt>とき</rt></ruby>でも、<ruby>希望<rt>きぼう</rt></ruby>の<ruby>光<rt>ひかり</rt></ruby>を<ruby>絶<rt>た</rt></ruby>やしてはいけない。",
    exKo: "아무리 괴로울 때라도, 희망의 빛을 꺼뜨려서는 안 된다."
  },
  {
    id: 18,
    word: "現れる",
    reading: "あらわれる",
    meaning: "나타나다, 드러나다",
    tag: "日常",
    exJa: "<ruby>雲<rt>くも</rt></ruby>の<ruby>切<rt>き</rt></ruby>れ<ruby>間<rt>ま</rt></ruby>から、<ruby>美<rt>うつく</rt></ruby>しい<ruby>満月<rt>まんげつ</rt></ruby>が<ruby>姿<rt>すがた</rt></ruby>を<ruby>現<rt>あらわ</rt></ruby>した。",
    exKo: "구름 사이로 아름다운 보름달이 모습을 드러냈다."
  },
  {
    id: 19,
    word: "教わる",
    reading: "おそわる",
    meaning: "배우다, 가르침을 받다",
    tag: "日常",
    exJa: "<ruby>先輩<rt>せんぱい</rt></ruby>から<ruby>仕事<rt>しごと</rt></ruby>の<ruby>進<rt>すす</rt></ruby>め<ruby>方<rt>かた</rt></ruby>を<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>教<rt>おそ</rt></ruby>わった。",
    exKo: "선배로부터 일의 진행 방식을 친절하게 배웠다."
  },
  {
    id: 20,
    word: "申し出す",
    reading: "もうしだす",
    meaning: "(의사·신청 등을) 제출하다, 신청하다, 제의하다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>自<rt>みずか</rt></ruby>ら<ruby>退職<rt>たいしょく</rt></ruby>を<ruby>申<rt>もう</rt></ruby>し<ruby>出<rt>だ</rt></ruby>した。",
    exKo: "그는 스스로 퇴직을 제의했다."
  },
  {
    id: 21,
    word: "噛み砕く",
    reading: "かみくだく",
    meaning: "씹어 꺾다; (이해하기 쉽게) 씹어서 설명하다",
    tag: "日常",
    exJa: "<ruby>専門用語<rt>せんもんようご</rt></ruby>を<ruby>避<rt>さ</rt></ruby>け、<ruby>素人<rt>しろうと</rt></ruby>にも<ruby>分<rt>わ</rt></ruby>かりやすく<ruby>噛<rt>か</rt></ruby>み<ruby>砕<rt>くだ</rt></ruby>いて<ruby>説明<rt>せつめい</rt></ruby>した。",
    exKo: "전문용어를 피하고, 초보자도 알기 쉽게 풀어서 설명했다."
  },
  {
    id: 22,
    word: "収まる",
    reading: "おさまる",
    meaning: "수습되다, 가라앉다, 안으로 들어가다",
    tag: "日常",
    exJa: "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>過<rt>す</rt></ruby>ぎ<ruby>去<rt>さ</rt></ruby>り、ようやく<ruby>風<rt>かぜ</rt></ruby>が<ruby>収<rt>おさ</rt></ruby>まった。",
    exKo: "태풍이 지나가고 마침내 바람이 가라앉았다."
  },
  {
    id: 23,
    word: "キレる",
    reading: "きれる",
    meaning: "적반하장으로 화내다, 끈이 끊어지듯 성질을 내다",
    tag: "日常",
    exJa: "ちょっと<ruby>注意<rt>ちゅうい</rt></ruby>しただけで、<ruby>彼<rt>かれ</rt></ruby>は<ruby>突然<rt>とつぜん</rt></ruby>キレて<ruby>怒鳴<rt>どな</rt></ruby>り<ruby>出<rt>だ</rt></ruby>した。",
    exKo: "조금 주의를 주었을 뿐인데, 그는 갑자기 욱해서 소리를 지르기 시작했다."
  },
  {
    id: 24,
    word: "拗れる",
    reading: "こじれる",
    meaning: "뒤틀리다, 꼬이다, (사태가) 악화되다",
    tag: "日常",
    exJa: "<ruby>両国間<rt>りょうこくかん</rt></ruby>の<ruby>交渉<rt>こうしょう</rt></ruby>が<ruby>拗<rt>こじ</rt></ruby>れて、<ruby>解決<rt>かいけつ</rt></ruby>の<ruby>糸口<rt>いとぐち</rt></ruby>が<ruby>見<rt>み</rt></ruby>えない。",
    exKo: "양국 간의 협상이 꼬여서, 해결의 실마리가 보이지 않는다."
  },
  {
    id: 25,
    word: "まくしたてる",
    reading: "まくしたてる",
    meaning: "(말을) 쏟아붓다, 들이대며 말하다",
    tag: "日常",
    exJa: "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>不満<rt>ふまん</rt></ruby>を<ruby>一方的<rt>いっぽうてき</rt></ruby>にまくしたてて、<ruby>部屋<rt>へや</rt></ruby>を<ruby>出<rt>で</rt></ruby>ていった。",
    exKo: "그녀는 불만을 일방적으로 쏟아붓고 방을 나갔다."
  },
  {
    id: 26,
    word: "つられる",
    reading: "つられる",
    meaning: "끌려가다, 유혹되다, 부화뇌동하다",
    tag: "日常",
    exJa: "<ruby>友達<rt>ともだち</rt></ruby>の<ruby>大笑<rt>おおわら</rt></ruby>いにつられて、<ruby>私<rt>わたし</rt></ruby>もつい<ruby>笑<rt>わら</rt></ruby>ってしまった。",
    exKo: "친구의 큰 웃음에 끌려, 나도 그만 웃고 말았다."
  },
  {
    id: 27,
    word: "取り組む",
    reading: "とりくむ",
    meaning: "맞붙다, 몰두하다, 대처하다",
    tag: "日常",
    exJa: "<ruby>環境問題<rt>かんきょうもんだい</rt></ruby>に<ruby>真剣<rt>しんけん</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む<ruby>必要<rt>ひつよう</rt></ruby>がある。",
    exKo: "환경 문제에 진지하게 몰두할 필요가 있다."
  },
  {
    id: 28,
    word: "持ち合わせる",
    reading: "もちあわせる",
    meaning: "마침 가지고 있다",
    tag: "日常",
    exJa: "あいにく、<ruby>今<rt>いま</rt></ruby>は<ruby>名刺<rt>めいし</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせておりません。",
    exKo: "공교롭게도 지금은 명함을 가지고 있지 않습니다."
  },
  {
    id: 29,
    word: "教えられる",
    reading: "おしえられる",
    meaning: "가르침을 받다, 깨닫게 되다",
    tag: "日常",
    exJa: "<ruby>子供<rt>こども</rt></ruby>の<ruby>純粋<rt>しゅんすい</rt></ruby>な<ruby>疑問<rt>ぎもん</rt></ruby>から、<ruby>大切<rt>たいせつ</rt></ruby>なことを<ruby>教<rt>おし</rt></ruby>えられた。",
    exKo: "아이의 순수한 의문에서 소중한 것을 깨닫게 되었다."
  },
  {
    id: 30,
    word: "語りかける",
    reading: "かたりかける",
    meaning: "말을 걸다",
    tag: "日常",
    exJa: "<ruby>先生<rt>せんせい</rt></ruby>は<ruby>生徒<rt>せいと</rt></ruby>たちに、<ruby>優<rt>やさ</rt></ruby>しい<ruby>声<rt>こえ</rt></ruby>で<ruby>語<rt>かた</rt></ruby>りかけた。",
    exKo: "선생님은 학생들에게 다정한 목소리로 말을 걸었다."
  },
  {
    id: 31,
    word: "招く",
    reading: "まねく",
    meaning: "손짓하여 부르다, 초래하다, 불러일으키다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>軽率<rt>けいそつ</rt></ruby>な<ruby>発言<rt>はつげん</rt></ruby>が、<ruby>大<rt>おお</rt></ruby>きな<ruby>誤解<rt>ごかい</rt></ruby>を<ruby>招<rt>まね</rt></ruby>いてしまった。",
    exKo: "그의 경솔한 발언이 큰 오해를 초래하고 말았다."
  },
  {
    id: 32,
    word: "さらけ出す",
    reading: "さらけだす",
    meaning: "모두 드러내다, 노출시키다",
    tag: "日常",
    exJa: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>弱<rt>よわ</rt></ruby>さをさらけ<ruby>出<rt>だ</rt></ruby>すことで、<ruby>心<rt>こころ</rt></ruby>が<ruby>楽<rt>らく</rt></ruby>になった。",
    exKo: "자신의 약함을 모두 드러냄으로써 마음이 편해졌다."
  },
  {
    id: 33,
    word: "指す",
    reading: "さす",
    meaning: "가리키다, 지적하다",
    tag: "日常",
    exJa: "<ruby>時計<rt>とけい</rt></ruby>の<ruby>針<rt>はり</rt></ruby>は、ちょうど<ruby>正午<rt>しょうご</rt></ruby>を<ruby>指<rt>さ</rt></ruby>していた。",
    exKo: "시곗바늘은 정확히 정오를 가리키고 있었다."
  },
  {
    id: 34,
    word: "漂う",
    reading: "ただよう",
    meaning: "떠돌다, 표류하다, (향기·분위기 등이) 감돌다",
    tag: "日常",
    exJa: "<ruby>台所<rt>だいどころ</rt></ruby>からカレーのいい<ruby>匂<rt>にお</rt></ruby>いが<ruby>漂<rt>ただよ</rt></ruby>ってくる。",
    exKo: "부엌에서 카레의 좋은 냄새가 감돌아 온다."
  },
  {
    id: 35,
    word: "分け合う",
    reading: "わけあう",
    meaning: "서로 나누다",
    tag: "日常",
    exJa: "<ruby>一<rt>ひと</rt></ruby>つのパンを<ruby>兄弟<rt>きょうだい</rt></ruby>で<ruby>分<rt>わ</rt></ruby>け<ruby>合<rt>あ</rt></ruby>って<ruby>食<rt>た</rt></ruby>べた。",
    exKo: "빵 한 개를 형제가 서로 나누어 먹었다."
  },
  {
    id: 36,
    word: "暖を取る",
    reading: "だんをとる",
    meaning: "불을 쬐다, 온기를 얻다",
    tag: "日常",
    exJa: "<ruby>寒<rt>さむ</rt></ruby>い<ruby>冬<rt>ふゆ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>、ストーブの<ruby>前<rt>まえ</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まって<ruby>暖<rt>だん</rt></ruby>を<ruby>取<rt>と</rt></ruby>った。",
    exKo: "추운 겨울날, 난로 앞에 모여 불을 쬐었다."
  },
  {
    id: 37,
    word: "覚える",
    reading: "おぼえる",
    meaning: "기억하다, 익히다; (감정·감각을) 느끼다, 자연스럽게 체득하다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>不自然<rt>ふしぜん</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>に、<ruby>強<rt>つよ</rt></ruby>い<ruby>違和感<rt>いわかん</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えた。",
    exKo: "그의 부자연스러운 태도에 강한 위화감을 느꼈다."
  },
  {
    id: 38,
    word: "捕まえる",
    reading: "つかまえる",
    meaning: "잡다, 붙잡다",
    tag: "日常",
    exJa: "<ruby>警察<rt>けいさつ</rt></ruby>は<ruby>逃<rt>に</rt></ruby>げる<ruby>泥棒<rt>どろぼう</rt></ruby>を<ruby>路地裏<rt>ろじうら</rt></ruby>で<ruby>捕<rt>つか</rt></ruby>まえた。",
    exKo: "경찰은 도망치는 도둑을 뒷골목에서 붙잡았다."
  },
  {
    id: 39,
    word: "固める",
    reading: "かためる",
    meaning: "굳히다, 다지다",
    tag: "日常",
    exJa: "<ruby>海外<rt>かいがい</rt></ruby>に<ruby>留学<rt>りゅうがく</rt></ruby>するという<ruby>決意<rt>けつい</rt></ruby>を<ruby>固<rt>かた</rt></ruby>めた。",
    exKo: "해외로 유학하겠다는 결의를 다졌다."
  },
  {
    id: 40,
    word: "囲む",
    reading: "かこむ",
    meaning: "둘러싸다, 에워싸다",
    tag: "日常",
    exJa: "<ruby>家族<rt>かぞく</rt></ruby>みんなで<ruby>食卓<rt>しょくたく</rt></ruby>を<ruby>囲<rt>かこ</rt></ruby>んで、<ruby>楽<rt>たの</rt></ruby>しく<ruby>夕食<rt>ゆうしょく</rt></ruby>をとる。",
    exKo: "가족 모두가 식탁을 둘러싸고 즐겁게 저녁을 먹는다."
  },
  {
    id: 41,
    word: "築く",
    reading: "きずく",
    meaning: "쌓다, 구축하다",
    tag: "日常",
    exJa: "<ruby>長年<rt>ながねん</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>によって、<ruby>揺<rt>ゆ</rt></ruby>るぎない<ruby>信頼関係<rt>しんらいかんけい</rt></ruby>を<ruby>築<rt>きず</rt></ruby>いた。",
    exKo: "오랜 노력에 의해 흔들림 없는 신뢰 관계를 구축했다."
  },
  {
    id: 42,
    word: "縛る",
    reading: "しばる",
    meaning: "묶다, 속박하다",
    tag: "日常",
    exJa: "<ruby>古<rt>ふる</rt></ruby>い<ruby>規則<rt>きそく</rt></ruby>に<ruby>縛<rt>しば</rt></ruby>られて、<ruby>自由<rt>じゆう</rt></ruby>な<ruby>発想<rt>はつそう</rt></ruby>ができない。",
    exKo: "낡은 규칙에 얽매여 자유로운 발상을 할 수 없다."
  },
  {
    id: 43,
    word: "繰り返す",
    reading: "くりかえす",
    meaning: "되풀이하다, 반복하다",
    tag: "日常",
    exJa: "<ruby>同<rt>おな</rt></ruby>じ<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>さないように、<ruby>原因<rt>げんいん</rt></ruby>を<ruby>分析<rt>ぶんせき</rt></ruby>する。",
    exKo: "같은 실패를 되풀이하지 않도록 원인을 분석한다."
  },
  {
    id: 44,
    word: "体得",
    reading: "たいとく",
    meaning: "몸소 익히다 (체득하다)",
    tag: "日常",
    exJa: "<ruby>何度<rt>なんど</rt></ruby>も<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>重<rt>かさ</rt></ruby>ねて、その<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>体得<rt>たいとく</rt></ruby>した。",
    exKo: "여러 번 연습을 거듭하여 그 기술을 완전히 체득했다."
  },
  {
    id: 45,
    word: "遂げる",
    reading: "とげる",
    meaning: "이루다, 완수하다, (결과에) 이르고 마다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>多<rt>おお</rt></ruby>くの<ruby>困難<rt>こんなん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>え、ついに<ruby>目的<rt>もくてき</rt></ruby>を<ruby>遂<rt>と</rt></ruby>げた。",
    exKo: "그는 많은 어려움을 극복하고 마침내 목적을 이루었다."
  },
  {
    id: 46,
    word: "叶う",
    reading: "かなう",
    meaning: "(꿈·소원이) 이루어지다",
    tag: "日常",
    exJa: "<ruby>長年<rt>ながねん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>が<ruby>叶<rt>かな</rt></ruby>って、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つことができた。",
    exKo: "오랜 꿈이 이루어져서 자신의 가게를 가질 수 있게 되었다."
  },
  {
    id: 47,
    word: "叶える",
    reading: "かなえる",
    meaning: "(꿈·소원을) 이루어 주다, 이뤄내다",
    tag: "日常",
    exJa: "<ruby>子供<rt>こども</rt></ruby>たちの<ruby>願<rt>ねが</rt></ruby>いを<ruby>叶<rt>かな</rt></ruby>えるために、サンタクロースに<ruby>扮<rt>ふん</rt></ruby>した。",
    exKo: "아이들의 소원을 이루어 주기 위해 산타클로스로 분장했다."
  },
  {
    id: 48,
    word: "敬服する",
    reading: "けいふくする",
    meaning: "경복하다, 깊이 존경하다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>献身的<rt>けんしんてき</rt></ruby>な<ruby>働<rt>はたら</rt></ruby>きぶりには、まったく<ruby>敬服<rt>けいふく</rt></ruby>するばかりだ。",
    exKo: "그의 헌신적인 일솜씨에는 그저 경복할 따름이다."
  },
  {
    id: 49,
    word: "制御",
    reading: "せいぎょ",
    meaning: "제어하다, 통제하다",
    tag: "日常",
    exJa: "<ruby>機械<rt>きかい</rt></ruby>の<ruby>動<rt>うご</rt></ruby>きをコンピューターで<ruby>正確<rt>せいかく</rt></ruby>に<ruby>制御<rt>せいぎょ</rt></ruby>する。",
    exKo: "기계의 움직임을 컴퓨터로 정확하게 제어한다."
  },
  {
    id: 50,
    word: "水やり",
    reading: "みずやり",
    meaning: "(식물에) 물주기",
    tag: "日常",
    exJa: "<ruby>毎朝<rt>まいあさ</rt></ruby>、ベランダの<ruby>植物<rt>しょくぶつ</rt></ruby>に<ruby>水<rt>みず</rt></ruby>やりをするのが<ruby>日課<rt>にっか</rt></ruby>だ。",
    exKo: "매일 아침 베란다의 식물에 물을 주는 것이 일과다."
  },
  {
    id: 51,
    word: "陸上",
    reading: "りくじょう",
    meaning: "육상",
    tag: "日常",
    exJa: "<ruby>陸上<rt>りくじょう</rt></ruby>の<ruby>大会<rt>たいかい</rt></ruby>で<ruby>新記録<rt>しんきろく</rt></ruby>を<ruby>出<rt>だ</rt></ruby>した。",
    exKo: "육상 대회에서 신기록을 냈다."
  },
  {
    id: 52,
    word: "苔",
    reading: "こけ",
    meaning: "이끼",
    tag: "日常",
    exJa: "<ruby>古<rt>ふる</rt></ruby>い<ruby>石<rt>いし</rt></ruby>に<ruby>青々<rt>あおあお</rt></ruby>とした<ruby>苔<rt>こけ</rt></ruby>が<ruby>生<rt>は</rt></ruby>えている。",
    exKo: "낡은 돌에 푸릇푸릇한 이끼가 자라 있다."
  },
  {
    id: 53,
    word: "剣幕",
    reading: "けんまく",
    meaning: "기세, 험악한 태도/얼굴빛",
    tag: "日常",
    exJa: "<ruby>彼女<rt>かのじょ</rt></ruby>のすごい<ruby>剣幕<rt>けんまく</rt></ruby>に<ruby>圧倒<rt>あっとう</rt></ruby>された。",
    exKo: "그녀의 무서운 기세에 압도당했다."
  },
  {
    id: 54,
    word: "早口",
    reading: "はやくち",
    meaning: "빠른 말, 말을 빠르게 함",
    tag: "日常",
    exJa: "<ruby>緊張<rt>きんちょう</rt></ruby>すると、つい<ruby>早口<rt>はやくち</rt></ruby>になってしまう。",
    exKo: "긴장하면 그만 말이 빨라지고 만다."
  },
  {
    id: 55,
    word: "伝染",
    reading: "でんせん",
    meaning: "전염",
    tag: "日常",
    exJa: "あくびは<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>に<ruby>伝染<rt>でんせん</rt></ruby>しやすい。",
    exKo: "하품은 주위 사람에게 전염되기 쉽다."
  },
  {
    id: 56,
    word: "道筋",
    reading: "みちすじ",
    meaning: "길순, 경로, 이치/줄거리",
    tag: "日常",
    exJa: "<ruby>解決<rt>かいけつ</rt></ruby>への<ruby>道筋<rt>みちすじ</rt></ruby>がようやく<ruby>見<rt>み</rt></ruby>えてきた。",
    exKo: "해결을 향한 경로가 마침내 보이기 시작했다."
  },
  {
    id: 57,
    word: "真偽",
    reading: "しんぎ",
    meaning: "진위, 진위 여부",
    tag: "日常",
    exJa: "その<ruby>噂<rt>うわさ</rt></ruby>の<ruby>真偽<rt>しんぎ</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>にも<ruby>分<rt>わ</rt></ruby>からない。",
    exKo: "그 소문의 진위는 아무도 모른다."
  },
  {
    id: 58,
    word: "趣味",
    reading: "しゅみ",
    meaning: "취미, 멋, 풍류, 센스, 취향",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>の<ruby>家具<rt>かぐ</rt></ruby>はとても<ruby>趣味<rt>しゅみ</rt></ruby>がいい。",
    exKo: "그의 방 가구는 매우 센스가 좋다."
  },
  {
    id: 59,
    word: "断り",
    reading: "ことわり",
    meaning: "거절, 사전 양해/통보",
    tag: "日常",
    exJa: "<ruby>何<rt>なに</rt></ruby>の<ruby>断<rt>ことわ</rt></ruby>りもなく<ruby>欠席<rt>けっせき</rt></ruby>してはいけない。",
    exKo: "아무런 사전 양해 없이 결석해서는 안 된다."
  },
  {
    id: 60,
    word: "陰口",
    reading: "かげぐち",
    meaning: "험담, 뒷공론",
    tag: "日常",
    exJa: "<ruby>人<rt>ひと</rt></ruby>の<ruby>陰口<rt>かげぐち</rt></ruby>を<ruby>言<rt>い</rt></ruby>うのはやめるべきだ。",
    exKo: "남의 험담을 하는 것은 그만두어야 한다."
  },
  {
    id: 61,
    word: "針",
    reading: "はり",
    meaning: "바늘, 침",
    tag: "日常",
    exJa: "<ruby>時計<rt>とけい</rt></ruby>の<ruby>針<rt>はり</rt></ruby>が<ruby>正午<rt>しょうご</rt></ruby>を<ruby>指<rt>さ</rt></ruby>している。",
    exKo: "시곗바늘이 정오를 가리키고 있다."
  },
  {
    id: 62,
    word: "開花",
    reading: "かいか",
    meaning: "개화, 꽃이 핌",
    tag: "日常",
    exJa: "<ruby>長年<rt>ながねん</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>が<ruby>実<rt>みの</rt></ruby>を<ruby>結<rt>むす</rt></ruby>び、<ruby>才能<rt>さいのう</rt></ruby>が<ruby>開花<rt>かいか</rt></ruby>した。",
    exKo: "오랜 노력이 결실을 맺어, 재능이 개화했다."
  },
  {
    id: 63,
    word: "閉花",
    reading: "へいか",
    meaning: "폐화, 꽃이 짐",
    tag: "日常",
    exJa: "<ruby>夜<rt>よる</rt></ruby>になると<ruby>閉花<rt>へいか</rt></ruby>する<ruby>植物<rt>しょくぶつ</rt></ruby>もある。",
    exKo: "밤이 되면 꽃이 닫히는 식물도 있다."
  },
  {
    id: 64,
    word: "適正",
    reading: "てきせい",
    meaning: "적정, 적절함",
    tag: "日常",
    exJa: "<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>価格<rt>かかく</rt></ruby>を<ruby>適正<rt>てきせい</rt></ruby>な<ruby>水準<rt>すいじゅん</rt></ruby>に<ruby>見直<rt>みなお</rt></ruby>す。",
    exKo: "상품의 가격을 적정한 수준으로 재검토한다."
  },
  {
    id: 65,
    word: "日照",
    reading: "にっしょう",
    meaning: "일조, 햇빛이 쬠",
    tag: "日常",
    exJa: "<ruby>今年<rt>ことし</rt></ruby>は<ruby>日照<rt>にっしょう</rt></ruby><ruby>時間<rt>じかん</rt></ruby>が<ruby>短<rt>みじか</rt></ruby>く、<ruby>野菜<rt>やさい</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い。",
    exKo: "올해는 일조 시간이 짧아 채솟값이 비싸다."
  },
  {
    id: 66,
    word: "茎",
    reading: "くき",
    meaning: "줄기 (식물)",
    tag: "日常",
    exJa: "この<ruby>花<rt>はな</rt></ruby>は<ruby>茎<rt>くき</rt></ruby>が<ruby>太<rt>ふと</rt></ruby>くて<ruby>折<rt>お</rt></ruby>れにくい。",
    exKo: "이 꽃은 줄기가 굵어서 잘 부러지지 않는다."
  },
  {
    id: 67,
    word: "風雨",
    reading: "ふうう",
    meaning: "비바람",
    tag: "日常",
    exJa: "<ruby>激<rt>はげ</rt></ruby>しい<ruby>風雨<rt>ふうう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>、<ruby>家<rt>いえ</rt></ruby>に<ruby>急<rt>いそ</rt></ruby>いで<ruby>帰<rt>かえ</rt></ruby>った。",
    exKo: "거센 비바람 속을 뚫고 집으로 서둘러 돌아갔다."
  },
  {
    id: 68,
    word: "獲物",
    reading: "えもの",
    meaning: "사냥감, 획득한 물건",
    tag: "日常",
    exJa: "ライオンが<ruby>獲物<rt>えもの</rt></ruby>を<ruby>狙<rt>ねら</rt></ruby>って<ruby>静<rt>しず</rt></ruby>かに<ruby>近<rt>ちか</rt></ruby>づく。",
    exKo: "사자가 사냥감을 노리며 조용히 다가간다."
  },
  {
    id: 69,
    word: "協力",
    reading: "きょうりょく",
    meaning: "협력",
    tag: "日常",
    exJa: "クラス<ruby>全員<rt>ぜんいん</rt></ruby>で<ruby>協力<rt>きょうりょく</rt></ruby>して<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めた。",
    exKo: "반 전원이 협력하여 준비를 진행했다."
  },
  {
    id: 70,
    word: "分配",
    reading: "ぶんぱい",
    meaning: "분배",
    tag: "日常",
    exJa: "<ruby>利益<rt>りえき</rt></ruby>をチームの<ruby>全員<rt>ぜんいん</rt></ruby>で<ruby>平等<rt>びょうどう</rt></ruby>に<ruby>分配<rt>ぶんぱい</rt></ruby>する。",
    exKo: "이익을 팀 전원에게 평등하게 분배한다."
  },
  {
    id: 71,
    word: "食物",
    reading: "しょくもつ",
    meaning: "음식물, 먹거리",
    tag: "日常",
    exJa: "<ruby>食物<rt>しょくもつ</rt></ruby>アレルギーがあるか<ruby>事前<rt>じぜん</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>する。",
    exKo: "음식물 알레르기가 있는지 사전에 확인한다."
  },
  {
    id: 72,
    word: "一因",
    reading: "いちいん",
    meaning: "한 가지 원인",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>不用意<rt>ふようい</rt></ruby>な<ruby>発言<rt>はつげん</rt></ruby>も<ruby>失敗<rt>しっぱい</rt></ruby>の<ruby>一因<rt>いちいん</rt></ruby>だ。",
    exKo: "그의 부주의한 발언도 실패의 한 원인이다."
  },
  {
    id: 73,
    word: "規範",
    reading: "きはん",
    meaning: "규범",
    tag: "日常",
    exJa: "<ruby>社会<rt>しゃかい</rt></ruby>の<ruby>規範<rt>きはん</rt></ruby>に<ruby>従<rt>したが</rt></ruby>って<ruby>行動<rt>こうどう</rt></ruby>するべきだ。",
    exKo: "사회의 규범에 따라서 행동해야 한다."
  },
  {
    id: 74,
    word: "過剰",
    reading: "かじょう",
    meaning: "과잉, 과도함",
    tag: "日常",
    exJa: "<ruby>過剰<rt>かじょう</rt></ruby>な<ruby>期待<rt>きたい</rt></ruby>は<ruby>逆効果<rt>ぎゃくこうか</rt></ruby>になることがある。",
    exKo: "과도한 기대는 역효과가 될 수 있다."
  },
  {
    id: 75,
    word: "浪費",
    reading: "ろうひ",
    meaning: "낭비",
    tag: "日常",
    exJa: "<ruby>貴重<rt>きちょう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>を<ruby>浪費<rt>ろうひ</rt></ruby>してはならない。",
    exKo: "귀중한 시간을 낭비해서는 안 된다."
  },
  {
    id: 76,
    word: "消費",
    reading: "しょうひ",
    meaning: "소비",
    tag: "日常",
    exJa: "<ruby>最近<rt>さいきん</rt></ruby>はエコな<ruby>製品<rt>せいひん</rt></ruby>の<ruby>消費<rt>しょうひ</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えている。",
    exKo: "최근에는 친환경 제품의 소비가 늘고 있다."
  },
  {
    id: 77,
    word: "破壊",
    reading: "はかい",
    meaning: "파괴",
    tag: "日常",
    exJa: "<ruby>自然<rt>しぜん</rt></ruby><ruby>環境<rt>かんきょう</rt></ruby>の<ruby>破壊<rt>はかい</rt></ruby>が<ruby>深刻<rt>しんこく</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>となっている。",
    exKo: "자연환경의 파괴가 심각한 문제가 되고 있다."
  },
  {
    id: 78,
    word: "様",
    reading: "さま",
    meaning: "모습, 상태, 모양",
    tag: "日常",
    exJa: "<ruby>子供<rt>こども</rt></ruby>たちが<ruby>公園<rt>こうえん</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>様<rt>さま</rt></ruby>を<ruby>見守<rt>みまも</rt></ruby>る。",
    exKo: "아이들이 공원에서 노는 모습을 지켜본다."
  },
  {
    id: 79,
    word: "類似性",
    reading: "るいじせい",
    meaning: "유사성",
    tag: "日常",
    exJa: "<ruby>二<rt>ふた</rt></ruby>つの<ruby>言語<rt>げんご</rt></ruby>には<ruby>文法<rt>ぶんぽう</rt></ruby>の<ruby>類似性<rt>るいじせい</rt></ruby>がある。",
    exKo: "두 언어에는 문법의 유사성이 있다."
  },
  {
    id: 80,
    word: "域",
    reading: "いき",
    meaning: "영역, 경지, 수준",
    tag: "日常",
    exJa: "<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>技術<rt>ぎじゅつ</rt></ruby>はプロの<ruby>域<rt>いき</rt></ruby>に<ruby>達<rt>たっ</rt></ruby>している。",
    exKo: "그녀의 기술은 프로의 경지에 달해 있다."
  },
  {
    id: 81,
    word: "技",
    reading: "わざ",
    meaning: "기술, 솜씨, 묘기",
    tag: "日常",
    exJa: "<ruby>職人<rt>しょくにん</rt></ruby>の<ruby>見事<rt>みごと</rt></ruby>な<ruby>技<rt>わざ</rt></ruby>に<ruby>見惚<rt>みと</rt></ruby>れてしまった。",
    exKo: "장인의 훌륭한 솜씨에 넋을 잃고 보았다."
  },
  {
    id: 82,
    word: "である",
    reading: "である",
    meaning: "~이다",
    tag: "日常",
    exJa: "<ruby>健康<rt>けんこう</rt></ruby>こそが<ruby>最大<rt>さいだい</rt></ruby>の<ruby>財産<rt>ざいさん</rt></ruby>である。",
    exKo: "건강이야말로 최대의 재산이다."
  },
  {
    id: 83,
    word: "時速",
    reading: "じそく",
    meaning: "시속",
    tag: "日常",
    exJa: "<ruby>新幹線<rt>しんかんせん</rt></ruby>は<ruby>時速<rt>じそく</rt></ruby>３００キロで<ruby>走<rt>はし</rt></ruby>る。",
    exKo: "신칸센은 시속 300km로 달린다."
  },
  {
    id: 84,
    word: "さほど",
    reading: "さほど",
    meaning: "그다지, 별로",
    tag: "日常",
    exJa: "<ruby>思<rt>おも</rt></ruby>っていたほど、さほど<ruby>難<rt>むずか</rt></ruby>しくなかった。",
    exKo: "생각했던 것만큼 그다지 어렵지 않았다."
  },
  {
    id: 85,
    word: "身近",
    reading: "みぢか",
    meaning: "신변, 가까운 곳 (친숙함)",
    tag: "日常",
    exJa: "<ruby>身近<rt>みぢか</rt></ruby>な<ruby>出来事<rt>できごと</rt></ruby>からヒントを<ruby>得<rt>え</rt></ruby>る。",
    exKo: "주변의 일에서 힌트를 얻는다."
  },
  {
    id: 86,
    word: "ましてや",
    reading: "ましてや",
    meaning: "하물며, 더구나",
    tag: "日常",
    exJa: "<ruby>大人<rt>おとな</rt></ruby>でも<ruby>無理<rt>むり</rt></ruby>なのに、ましてや<ruby>子供<rt>こども</rt></ruby>にはできない。",
    exKo: "어른도 무리인데, 하물며 아이에게는 불가능하다."
  },
  {
    id: 87,
    word: "ほんの",
    reading: "ほんの",
    meaning: "그저, 단지, 약간의",
    tag: "日常",
    exJa: "ほんの<ruby>気持<rt>きも</rt></ruby>ちですが、お<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りください。",
    exKo: "그저 작은 성의입니다만, 받아 주세요."
  },
  {
    id: 88,
    word: "なんともはや",
    reading: "なんともはや",
    meaning: "참으로, 어처구니없게도",
    tag: "日常",
    exJa: "なんともはや、あきれて<ruby>言葉<rt>ことば</rt></ruby>も<ruby>出<rt>で</rt></ruby>ない。",
    exKo: "참으로 어처구니가 없어서 말도 안 나온다."
  },
  {
    id: 89,
    word: "しかも",
    reading: "しかも",
    meaning: "게다가, 더구나",
    tag: "日常",
    exJa: "<ruby>安<rt>やす</rt></ruby>くて、しかも<ruby>美味<rt>おい</rt></ruby>しいレストランを<ruby>見<rt>み</rt></ruby>つけた。",
    exKo: "싸고 게다가 맛있는 레스토랑을 찾았다."
  },
  {
    id: 90,
    word: "のち",
    reading: "のち",
    meaning: "뒤, 후, 나중",
    tag: "日常",
    exJa: "<ruby>晴<rt>は</rt></ruby>れ、のち<ruby>曇<rt>くも</rt></ruby>りの<ruby>予報<rt>よほう</rt></ruby>です。",
    exKo: "맑음, 나중(오후)에는 흐림 예보입니다."
  },
  {
    id: 91,
    word: "癒す",
    reading: "いやす",
    meaning: "고치다, 치료하다, 달래다",
    tag: "日常",
    exJa: "<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>浸<rt>つか</rt></ruby>かって、<ruby>日頃<rt>ひごろ</rt></ruby>の<ruby>疲<rt>つか</rt></ruby>れを<ruby>癒<rt>いや</rt></ruby>す。",
    exKo: "온천에 몸을 담그고 평소의 피로를 푼다."
  },
  {
    id: 92,
    word: "演奏",
    reading: "えんそう",
    meaning: "연주",
    tag: "日常",
    exJa: "ピアノの<ruby>美<rt>うつく</rt></ruby>しい<ruby>演奏<rt>えんそう</rt></ruby>に<ruby>感動<rt>かんどう</rt></ruby>した。",
    exKo: "피아노의 아름다운 연주에 감동했다."
  },
  {
    id: 93,
    word: "一握り",
    reading: "ひとにぎり",
    meaning: "한 줌, 아주 적음",
    tag: "日常",
    exJa: "<ruby>成功<rt>せいこう</rt></ruby>できるのは、ほんの<ruby>一握<rt>ひとにぎ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>だけだ。",
    exKo: "성공할 수 있는 것은 아주 극소수의 사람뿐이다."
  },
  {
    id: 94,
    word: "強迫",
    reading: "きょうはく",
    meaning: "강박",
    tag: "日常",
    exJa: "完璧<ruby>主義<rt>しゅぎ</rt></ruby>が<ruby>強迫<rt>きょうはく</rt></ruby><ruby>観念<rt>かんねん</rt></ruby>になっている。",
    exKo: "완벽주의가 강박 관념이 되어 있다."
  },
  {
    id: 95,
    word: "聞き飛ばす",
    reading: "ききとばす",
    meaning: "건성으로 듣고 넘기다, 흘려듣다",
    tag: "日常",
    exJa: "<ruby>上司<rt>じょうし</rt></ruby>の<ruby>小言<rt>こごと</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>から<ruby>左<rt>ひだり</rt></ruby>へ<ruby>聞<rt>き</rt></ruby>き<ruby>飛<rt>と</rt></ruby>ばす。",
    exKo: "상사의 잔소리를 한 귀로 듣고 한 귀로 흘려버린다."
  },
  {
    id: 96,
    word: "一律",
    reading: "いちりつ",
    meaning: "일률",
    tag: "日常",
    exJa: "ボーナスが<ruby>全社員<rt>ぜんしゃいん</rt></ruby>に<ruby>一律<rt>いちりつ</rt></ruby>で<ruby>支給<rt>しきゅう</rt></ruby>された。",
    exKo: "보너스가 전 사원에게 일률적으로 지급되었다."
  },
  {
    id: 97,
    word: "割く",
    reading: "さく",
    meaning: "할애하다, 쪼개다, 가르다",
    tag: "日常",
    exJa: "<ruby>忙<rt>いそが</rt></ruby>しい<ruby>中<rt>なか</rt></ruby>、<ruby>時間<rt>じかん</rt></ruby>を<ruby>割<rt>さ</rt></ruby>いていただき<ruby>感謝<rt>かんしゃ</rt></ruby>します。",
    exKo: "바쁘신 와중에 시간을 할애해 주셔서 감사합니다."
  },
  {
    id: 98,
    word: "自ら",
    reading: "みずから",
    meaning: "스스로, 친히",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>自<rt>みずか</rt></ruby>ら<ruby>進<rt>すす</rt></ruby>んで<ruby>困難<rt>こんなん</rt></ruby>な<ruby>仕事<rt>しごと</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた。",
    exKo: "그는 스스로 나서서 어려운 일을 떠맡았다."
  },
  {
    id: 99,
    word: "数多く",
    reading: "かずおおく",
    meaning: "수많이, 무수히",
    tag: "日常",
    exJa: "これまで<ruby>数多<rt>かずおお</rt></ruby>くの<ruby>困難<rt>こんなん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えてきた。",
    exKo: "지금까지 수많은 어려움을 극복해 왔다."
  },
  {
    id: 100,
    word: "決着",
    reading: "けっちゃく",
    meaning: "결착, 결말, 매듭",
    tag: "日常",
    exJa: "<ruby>長<rt>なが</rt></ruby>い<ruby>議論<rt>ぎろん</rt></ruby>の<ruby>末<rt>すえ</rt></ruby>、ようやく<ruby>問題<rt>もんだい</rt></ruby>が<ruby>決着<rt>けっちゃく</rt></ruby>した。",
    exKo: "오랜 논의 끝에 드디어 문제가 매듭지어졌다."
  },
  {
    id: 101,
    word: "等しい",
    reading: "ひとしい",
    meaning: "같다, 동등하다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>行<rt>おこな</rt></ruby>いは、<ruby>犯罪<rt>はんざい</rt></ruby>に<ruby>等<rt>ひと</rt></ruby>しい<ruby>行為<rt>こうい</rt></ruby>だ。",
    exKo: "그의 행실은 범죄와 다름없는 행위다."
  },
  {
    id: 102,
    word: "遭う",
    reading: "あう",
    meaning: "겪다, 당하다",
    tag: "日常",
    exJa: "<ruby>帰<rt>かえ</rt></ruby>り<ruby>道<rt>みち</rt></ruby>で、<ruby>突然<rt>とつぜん</rt></ruby>のひどい<ruby>夕立<rt>ゆうだち</rt></ruby>に<ruby>遭<rt>あ</rt></ruby>った。",
    exKo: "집으로 가는 길에 갑작스러운 심한 소나기를 만났다."
  },
  {
    id: 103,
    word: "挙句",
    reading: "あげく",
    meaning: "끝, 급기야",
    tag: "日常",
    exJa: "さんざん<ruby>迷<rt>まよ</rt></ruby>った<ruby>挙句<rt>あげく</rt></ruby>、<ruby>何<rt>なに</rt></ruby>も<ruby>買<rt>か</rt></ruby>わずに<ruby>帰<rt>かえ</rt></ruby>った。",
    exKo: "잔뜩 망설인 끝에, 아무것도 사지 않고 돌아왔다."
  },
  {
    id: 104,
    word: "あてになる",
    reading: "あてになる",
    meaning: "의지가 되다, 믿음직하다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>情報<rt>じょうほう</rt></ruby>はいつも<ruby>正確<rt>せいかく</rt></ruby>で、あてになる。",
    exKo: "그의 정보는 항상 정확해서 믿음직하다."
  },
  {
    id: 105,
    word: "用いる",
    reading: "もちいる",
    meaning: "사용하다, 쓰다",
    tag: "日常",
    exJa: "この<ruby>製品<rt>せいひん</rt></ruby>には、<ruby>特殊<rt>とくしゅ</rt></ruby>な<ruby>素材<rt>そざい</rt></ruby>が<ruby>用<rt>もち</rt></ruby>いられている。",
    exKo: "이 제품에는 특수한 소재가 사용되고 있다."
  },
  {
    id: 106,
    word: "すれ違い",
    reading: "すれちがい",
    meaning: "엇갈림, 스쳐 지나감",
    tag: "日常",
    exJa: "<ruby>夫婦<rt>ふうふ</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>に、<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>心<rt>こころ</rt></ruby>のすれ<ruby>違<rt>ちが</rt></ruby>いが<ruby>生<rt>しょう</rt></ruby>じた。",
    exKo: "부부 사이에 조금씩 마음의 엇갈림이 생겼다."
  },
  {
    id: 107,
    word: "駆られる",
    reading: "かられる",
    meaning: "(감정 등에) 사로잡히다, 쫓기다",
    tag: "日常",
    exJa: "<ruby>強<rt>つよ</rt></ruby>い<ruby>好奇心<rt>こうきしん</rt></ruby>に<ruby>駆<rt>か</rt></ruby>られて、そのドアを<ruby>開<rt>あ</rt></ruby>けた。",
    exKo: "강한 호기심에 사로잡혀 그 문을 열었다."
  },
  {
    id: 108,
    word: "差し迫る",
    reading: "さしせまる",
    meaning: "다가오다, 절박해지다",
    tag: "日常",
    exJa: "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りが<ruby>目前<rt>もくぜん</rt></ruby>に<ruby>差<rt>さ</rt></ruby>し<ruby>迫<rt>せま</rt></ruby>って、<ruby>焦<rt>あせ</rt></ruby>っている。",
    exKo: "마감이 눈앞으로 다가와 초조하다."
  },
  {
    id: 109,
    word: "迫る",
    reading: "せまる",
    meaning: "다가오다, 육박하다, 강요하다",
    tag: "日常",
    exJa: "<ruby>試験<rt>しけん</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>が、いよいよ<ruby>明日<rt>あす</rt></ruby>に<ruby>迫<rt>せま</rt></ruby>ってきた。",
    exKo: "시험 날이 드디어 내일로 다가왔다."
  },
  {
    id: 110,
    word: "患者",
    reading: "かんじゃ",
    meaning: "환자",
    tag: "日常",
    exJa: "<ruby>病院<rt>びょういん</rt></ruby>には、<ruby>多<rt>おお</rt></ruby>くの<ruby>患者<rt>かんじゃ</rt></ruby>が<ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>待<rt>ま</rt></ruby>っていた。",
    exKo: "병원에는 많은 환자가 순서를 기다리고 있었다."
  },
  {
    id: 111,
    word: "錆びつく",
    reading: "さびつく",
    meaning: "흠뻑 녹슬다, (능력 등이) 무뎌지다",
    tag: "日常",
    exJa: "ずっと<ruby>英語<rt>えいご</rt></ruby>を<ruby>話<rt>はな</rt></ruby>していないので、<ruby>語学力<rt>ごがくりょく</rt></ruby>が<ruby>錆<rt>さ</rt></ruby>びついた。",
    exKo: "계속 영어를 말하지 않아서 어학 능력이 무뎌졌다."
  },
  {
    id: 112,
    word: "気まぐれ",
    reading: "きまぐれ",
    meaning: "변덕스러움, 변덕",
    tag: "日常",
    exJa: "<ruby>猫<rt>ねこ</rt></ruby>の<ruby>気<rt>き</rt></ruby>まぐれな<ruby>性格<rt>せいかく</rt></ruby>も、<ruby>魅力<rt>みりょく</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つだ。",
    exKo: "고양이의 변덕스러운 성격도 매력 중 하나다."
  },
  {
    id: 113,
    word: "見抜く",
    reading: "みぬく",
    meaning: "간파하다, 꿰뚫어 보다",
    tag: "日常",
    exJa: "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の<ruby>嘘<rt>うそ</rt></ruby>を、<ruby>一瞬<rt>いっしゅん</rt></ruby>で<ruby>見抜<rt>みぬ</rt></ruby>いた。",
    exKo: "그녀는 내 거짓말을 순식간에 간파했다."
  },
  {
    id: 114,
    word: "近場",
    reading: "ちかば",
    meaning: "근처, 가까운 곳",
    tag: "日常",
    exJa: "<ruby>今度<rt>こんど</rt></ruby>の<ruby>休日<rt>きゅうじつ</rt></ruby>は、<ruby>近場<rt>ちかば</rt></ruby>の<ruby>温泉<rt>おんせん</rt></ruby>でゆっくりしたい。",
    exKo: "이번 휴일은 근처 온천에서 푹 쉬고 싶다."
  },
  {
    id: 115,
    word: "加える",
    reading: "くわえる",
    meaning: "가하다, 더하다",
    tag: "日常",
    exJa: "スープに<ruby>塩<rt>しお</rt></ruby>と<ruby>胡椒<rt>こしょう</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>加<rt>くわ</rt></ruby>える。",
    exKo: "수프에 소금과 후추를 조금 더한다."
  },
  {
    id: 116,
    word: "急激",
    reading: "きゅうげき",
    meaning: "급격",
    tag: "日常",
    exJa: "<ruby>気温<rt>きおん</rt></ruby>が<ruby>急激<rt>きゅうげき</rt></ruby>に<ruby>下<rt>さ</rt></ruby>がって、<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>いた。",
    exKo: "기온이 급격히 내려가서 감기에 걸렸다."
  },
  {
    id: 117,
    word: "発露",
    reading: "はつろ",
    meaning: "발로, 겉으로 드러남",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>は、<ruby>強<rt>つよ</rt></ruby>い<ruby>責任感<rt>せきにんかん</rt></ruby>の<ruby>発露<rt>はつろ</rt></ruby>だ。",
    exKo: "그의 행동은 강한 책임감의 발로다."
  },
  {
    id: 118,
    word: "まさしく",
    reading: "まさしく",
    meaning: "틀림없이, 바로",
    tag: "日常",
    exJa: "その<ruby>症状<rt>しょうじょう</rt></ruby>は、まさしく<ruby>風邪<rt>かぜ</rt></ruby>の<ruby>引<rt>ひ</rt></ruby>き<ruby>始<rt>はじ</rt></ruby>めだ。",
    exKo: "그 증상은 틀림없이 감기 초기다."
  },
  {
    id: 119,
    word: "ご機嫌になる",
    reading: "ごきげんになる",
    meaning: "기분이 좋아지다",
    tag: "日常",
    exJa: "お<ruby>菓子<rt>かし</rt></ruby>をもらって、<ruby>子供<rt>こども</rt></ruby>はすぐにご<ruby>機嫌<rt>きげん</rt></ruby>になった。",
    exKo: "과자를 받고 아이는 금세 기분이 좋아졌다."
  },
  {
    id: 120,
    word: "脆い",
    reading: "もろい",
    meaning: "무르다, 깨지기 쉽다, 취약하다",
    tag: "日常",
    exJa: "このガラスは<ruby>非常<rt>ひじょう</rt></ruby>に<ruby>脆<rt>もろ</rt></ruby>いので、<ruby>注意<rt>ちゅうい</rt></ruby>してください。",
    exKo: "이 유리는 매우 깨지기 쉬우니 주의해 주세요."
  },
  {
    id: 121,
    word: "創作",
    reading: "そうさく",
    meaning: "창작",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しい<ruby>小説<rt>しょうせつ</rt></ruby>の<ruby>創作<rt>そうさく</rt></ruby>に<ruby>没頭<rt>ぼっとう</rt></ruby>している。",
    exKo: "그는 새로운 소설 창작에 몰두하고 있다."
  },
  {
    id: 122,
    word: "遺物",
    reading: "いぶつ",
    meaning: "유물",
    tag: "日常",
    exJa: "<ruby>遺跡<rt>いせき</rt></ruby>から、<ruby>古代<rt>こだい</rt></ruby>の<ruby>貴重<rt>きちょう</rt></ruby>な<ruby>遺物<rt>いぶつ</rt></ruby>が<ruby>発掘<rt>はっくつ</rt></ruby>された。",
    exKo: "유적에서 고대의 귀중한 유물이 발굴되었다."
  },
  {
    id: 123,
    word: "掘る",
    reading: "ほる",
    meaning: "파다, 캐다",
    tag: "日常",
    exJa: "<ruby>庭<rt>にわ</rt></ruby>の<ruby>土<rt>つち</rt></ruby>を<ruby>深<rt>ふか</rt></ruby>く<ruby>掘<rt>ほ</rt></ruby>って、<ruby>木<rt>き</rt></ruby>の<ruby>苗<rt>なえ</rt></ruby>を<ruby>植<rt>う</rt></ruby>える。",
    exKo: "정원의 흙을 깊이 파서 나무 묘목을 심는다."
  },
  {
    id: 124,
    word: "素材",
    reading: "そざい",
    meaning: "소재",
    tag: "日常",
    exJa: "この<ruby>服<rt>ふく</rt></ruby>は、<ruby>肌<rt>はだ</rt></ruby>に<ruby>優<rt>やさ</rt></ruby>しい<ruby>自然<rt>しぜん</rt></ruby><ruby>素材<rt>そざい</rt></ruby>で<ruby>作<rt>つく</rt></ruby>られている。",
    exKo: "이 옷은 피부에 자극이 없는 천연 소재로 만들어졌다."
  },
  {
    id: 125,
    word: "錆びる",
    reading: "さびる",
    meaning: "녹슬다",
    tag: "日常",
    exJa: "<ruby>雨<rt>あめ</rt></ruby>に<ruby>濡<rt>ぬ</rt></ruby>れた<ruby>自転車<rt>じてんしゃ</rt></ruby>のチェーンが<ruby>錆<rt>さ</rt></ruby>びてしまった。",
    exKo: "비에 젖은 자전거 체인이 녹슬어 버렸다."
  },
  {
    id: 126,
    word: "廃棄",
    reading: "はいき",
    meaning: "폐기",
    tag: "日常",
    exJa: "<ruby>古<rt>ふる</rt></ruby>くなったパソコンを、<ruby>適切<rt>てきせつ</rt></ruby>に<ruby>廃棄<rt>はいき</rt></ruby>する。",
    exKo: "낡은 컴퓨터를 적절하게 폐기한다."
  },
  {
    id: 127,
    word: "というのも",
    reading: "というのも",
    meaning: "왜냐하면",
    tag: "日常",
    exJa: "<ruby>最近<rt>さいきん</rt></ruby><ruby>寝不足<rt>ねぶそく</rt></ruby>だ。というのも、<ruby>毎晩<rt>まいばん</rt></ruby><ruby>夜更<rt>よふ</rt></ruby>かししているからだ。",
    exKo: "최근 수면 부족이다. 왜냐하면 매일 밤늦게까지 깨어 있기 때문이다."
  },
  {
    id: 128,
    word: "唱える",
    reading: "となえる",
    meaning: "소리내어 읽다, 외치다, 주창하다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しい<ruby>教育<rt>きょういく</rt></ruby><ruby>改革<rt>かいかく</rt></ruby>の<ruby>必要性<rt>ひつようせい</rt></ruby>を<ruby>唱<rt>とな</rt></ruby>えた。",
    exKo: "그는 새로운 교육 개혁의 필요성을 주창했다."
  },
  {
    id: 129,
    word: "淘汰",
    reading: "とうた",
    meaning: "도태",
    tag: "日常",
    exJa: "<ruby>時代<rt>じだい</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>できない<ruby>企業<rt>きぎょう</rt></ruby>は、<ruby>自然<rt>しぜん</rt></ruby>と<ruby>淘汰<rt>とうた</rt></ruby>される。",
    exKo: "시대의 변화에 대응하지 못하는 기업은 자연히 도태된다."
  },
  {
    id: 130,
    word: "二言目",
    reading: "ふたことめ",
    meaning: "두 마디째, 입버릇처럼 하는 말",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>二言目<rt>ふたことめ</rt></ruby>には「<ruby>疲<rt>つか</rt></ruby>れた」とこぼす。",
    exKo: "그는 입버릇처럼 \"피곤하다\"고 푸념한다."
  },
  {
    id: 131,
    word: "粛々",
    reading: "しゅくしゅく",
    meaning: "조용하고 엄숙함 (숙숙)",
    tag: "日常",
    exJa: "<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>予定<rt>よてい</rt></ruby><ruby>通<rt>どお</rt></ruby>り、<ruby>粛々<rt>しゅくしゅく</rt></ruby>と<ruby>進行<rt>しんこう</rt></ruby>された。",
    exKo: "회의는 예정대로 조용하고 엄숙하게 진행되었다."
  },
  {
    id: 132,
    word: "漏らす",
    reading: "もらす",
    meaning: "새게 하다, 누설하다, 빠뜨리다",
    tag: "日常",
    exJa: "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>機密<rt>きみつ</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>を、<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>外部<rt>がいぶ</rt></ruby>へ<ruby>漏<rt>も</rt></ruby>らしてはいけない。",
    exKo: "회사 기밀 정보를 절대 외부로 누설해서는 안 된다."
  },
  {
    id: 133,
    word: "途方にくれる",
    reading: "とほうにくれる",
    meaning: "어찌할 바를 모르다, 망연자실하다",
    tag: "日常",
    exJa: "<ruby>財布<rt>さいふ</rt></ruby>とスマホをなくして、すっかり<ruby>途方<rt>とほう</rt></ruby>に<ruby>暮<rt>く</rt></ruby>れた。",
    exKo: "지갑과 스마트폰을 잃어버려 완전히 어찌할 바를 몰랐다."
  },
  {
    id: 134,
    word: "気が向く",
    reading: "きがむく",
    meaning: "마음이 내키다",
    tag: "日常",
    exJa: "<ruby>気<rt>き</rt></ruby>が<ruby>向<rt>む</rt></ruby>いたら、またいつでも<ruby>遊<rt>あそ</rt></ruby>びに<ruby>来<rt>き</rt></ruby>てください。",
    exKo: "마음이 내키면 언제든 다시 놀러 오세요."
  },
  {
    id: 135,
    word: "報酬",
    reading: "ほうしゅう",
    meaning: "보수",
    tag: "日常",
    exJa: "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>成果<rt>せいか</rt></ruby>に<ruby>見合<rt>みあ</rt></ruby>った、<ruby>正当<rt>せいとう</rt></ruby>な<ruby>報酬<rt>ほうしゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る。",
    exKo: "업무 성과에 걸맞은 정당한 보수를 받는다."
  },
  {
    id: 136,
    word: "費やす",
    reading: "ついやす",
    meaning: "쓰다, 소비하다",
    tag: "日常",
    exJa: ゲームに<ruby>多<rt>おお</rt></ruby>くの<ruby>時間<rt>じかん</rt></ruby>を<ruby>費<rt>つい</rt></ruby>やしてしまい、<ruby>後悔<rt>こうかい</rt></ruby>した。",
    exKo: "게임에 많은 시간을 써버려서 후회했다."
  },
  {
    id: 137,
    word: "道具",
    reading: "どうぐ",
    meaning: "도구",
    tag: "日常",
    exJa: "<ruby>料理<rt>りょうり</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>める<ruby>前<rt>まえ</rt></ruby>に、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>道具<rt>どうぐ</rt></ruby>を<ruby>揃<rt>そろ</rt></ruby>える。",
    exKo: "요리를 시작하기 전에 필요한 도구를 갖춘다."
  },
  {
    id: 138,
    word: "遅れる",
    reading: "おくれる",
    meaning: "늦다, 뒤떨어지다",
    tag: "日常",
    exJa: "<ruby>渋滞<rt>じゅうたい</rt></ruby>のせいで、<ruby>約束<rt>やくそく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れてしまった。",
    exKo: "정체 때문에 약속 시간에 늦고 말았다."
  },
  {
    id: 139,
    word: "遅い",
    reading: "おそい",
    meaning: "늦다, 느리다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>歩<rt>ある</rt></ruby>くのが<ruby>遅<rt>おそ</rt></ruby>いので、いつも<ruby>一番<rt>いちばん</rt></ruby><ruby>後<rt>うし</rt></ruby>ろになる。",
    exKo: "그는 걷는 것이 느려서 항상 맨 뒤가 된다."
  },
  {
    id: 140,
    word: "許容",
    reading: "きょよう",
    meaning: "허용",
    tag: "日常",
    exJa: この<ruby>間違<rt>まちが</rt></ruby>いは、<ruby>許容<rt>きょよう</rt></ruby>できる<ruby>範囲<rt>はんい</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えている。",
    exKo: "이 실수는 허용할 수 있는 범위를 넘어섰다."
  },
  {
    id: 141,
    word: "かつて",
    reading: "かつて",
    meaning: "일찍이, 예전",
    tag: "日常",
    exJa: この<ruby>町<rt>まち</rt></ruby>は、かつて<ruby>炭鉱<rt>たんこう</rt></ruby>で<ruby>栄<rt>さか</rt></ruby>えていた。",
    exKo: "이 마을은 예전에 탄광으로 번영했었다."
  },
  {
    id: 142,
    word: "堅苦しい",
    reading: "かたくるしい",
    meaning: "격식에 치우치다, 딱딱하다",
    tag: "日常",
    exJa: "<ruby>今日<rt>きょう</rt></ruby>の<ruby>飲<rt>の</rt></ruby>み<ruby>会<rt>かい</rt></ruby>は<ruby>無礼講<rt>ぶれいこう</rt></ruby>なので、<ruby>堅苦<rt>かたくる</rt></ruby>しい<ruby>挨拶<rt>あいさつ</rt></ruby>は<ruby>抜<rt>ぬ</rt></ruby>きにしよう。",
    exKo: "오늘 회식은 무례강이므로, 딱딱한 인사는 생략하자."
  },
  {
    id: 143,
    word: "襲来",
    reading: "しゅうらい",
    meaning: "내습, 습격",
    tag: "日常",
    exJa: "<ruby>大型<rt>おおがた</rt></ruby><ruby>台風<rt>たいふう</rt></ruby>の<ruby>襲来<rt>しゅうらい</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて、<ruby>水<rt>みず</rt></ruby>や<ruby>食料<rt>しょくりょう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>する。",
    exKo: "대형 태풍의 내습에 대비해 물과 식량을 확보한다."
  },
  {
    id: 144,
    word: "営み",
    reading: "いとなみ",
    meaning: "영위, 일, 작업, 행위",
    tag: "日常",
    exJa: "<ruby>人間<rt>にんげん</rt></ruby>の<ruby>自然<rt>しぜん</rt></ruby><ruby>破壊<rt>はかい</rt></ruby>が、<ruby>生態系<rt>せいたいけい</rt></ruby>の<ruby>営<rt>いとな</rt></ruby>みを<ruby>脅<rt>おびや</rt></ruby>かしている。",
    exKo: "인간의 자연 파괴가 생태계의 영위를 위협하고 있다."
  },
  {
    id: 145,
    word: "授受",
    reading: "じゅじゅ",
    meaning: "수수, 주고받음",
    tag: "日常",
    exJa: "<ruby>不正<rt>ふせい</rt></ruby>な<ruby>現金<rt>げんきん</rt></ruby>の<ruby>授受<rt>じゅじゅ</rt></ruby>があったとして、<ruby>警察<rt>けいさつ</rt></ruby>が<ruby>捜査<rt>そうさ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>出<rt>だ</rt></ruby>した。",
    exKo: "부정한 현금 수수가 있었다며 경찰이 수사에 나섰다."
  },
  {
    id: 146,
    word: "捕獲",
    reading: "ほかく",
    meaning: "포획",
    tag: "日常",
    exJa: "<ruby>逃<rt>に</rt></ruby>げ<ruby>出<rt>だ</rt></ruby>したペットの<ruby>猿<rt>さる</rt></ruby>が、<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>捕獲<rt>ほかく</rt></ruby>された。",
    exKo: "도망친 애완 원숭이가 무사히 포획되었다."
  },
  {
    id: 147,
    word: "感心",
    reading: "かんしん",
    meaning: "감탄, 기특함",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>真面目<rt>まじめ</rt></ruby>な<ruby>仕事<rt>しごと</rt></ruby>ぶりには、いつも<ruby>感心<rt>かんしん</rt></ruby>させられる。",
    exKo: "그의 성실한 일솜씨에는 항상 감탄하게 된다."
  },
  {
    id: 148,
    word: "かえって",
    reading: "かえって",
    meaning: "오히려, 반대로",
    tag: "日常",
    exJa: "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みすぎると、かえって<ruby>体<rt>からだ</rt></ruby>に<ruby>悪<rt>わる</rt></ruby>い。",
    exKo: "약을 너무 많이 먹으면 오히려 몸에 나쁘다."
  },
  {
    id: 149,
    word: "叩き込まれ",
    reading: "たたきこまれ",
    meaning: "철저히 주입되다, 처박히다",
    tag: "日常",
    exJa: "<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>の<ruby>研修<rt>けんしゅう</rt></ruby>で、<ruby>接客<rt>せっきゃく</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>を<ruby>徹底的<rt>てっていてき</rt></ruby>に<ruby>叩<rt>たた</rt></ruby>き<ruby>込<rt>こ</rt></ruby>まれた。",
    exKo: "신입 사원 연수에서 접객의 기본을 철저하게 주입받았다."
  },
  {
    id: 150,
    word: "洞察",
    reading: "どうさつ",
    meaning: "통찰",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>鋭<rt>するど</rt></ruby>い<ruby>洞察力<rt>どうさつりょく</rt></ruby>によって、<ruby>事件<rt>じけん</rt></ruby>の<ruby>真相<rt>しんそう</rt></ruby>が<ruby>明<rt>あき</rt></ruby>らかになった。",
    exKo: "그의 날카로운 통찰력에 의해 사건의 진상이 밝혀졌다."
  },
  {
    id: 151,
    word: "自閉症",
    reading: "じへいしょう",
    meaning: "자폐증",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>自閉症<rt>じへいしょう</rt></ruby>の<ruby>子供<rt>こども</rt></ruby>たちを<ruby>支援<rt>しえん</rt></ruby>する<ruby>活動<rt>かつどう</rt></ruby>をしている。",
    exKo: "그는 자폐증 아이들을 지원하는 활동을 하고 있다."
  },
  {
    id: 152,
    word: "危害",
    reading: "きがい",
    meaning: "위해",
    tag: "日常",
    exJa: "<ruby>他人<rt>たにん</rt></ruby>に<ruby>危害<rt>きがい</rt></ruby>を<ruby>加<rt>くわ</rt></ruby>えるような<ruby>行為<rt>こうい</rt></ruby>は<ruby>許<rt>ゆる</rt></ruby>されない。",
    exKo: "타인에게 위해를 가하는 행위는 용납되지 않는다."
  },
  {
    id: 153,
    word: "鈴",
    reading: "すず",
    meaning: "방울",
    tag: "日常",
    exJa: "<ruby>猫<rt>ねこ</rt></ruby>の<ruby>首<rt>くび</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さな<ruby>鈴<rt>すず</rt></ruby>をつける。",
    exKo: "고양이 목에 작은 방울을 단다."
  },
  {
    id: 154,
    word: "所持",
    reading: "しょじ",
    meaning: "소지",
    tag: "日常",
    exJa: "<ruby>危険物<rt>きけんぶつ</rt></ruby>の<ruby>所持<rt>しょじ</rt></ruby>は<ruby>法律<rt>ほうりつ</rt></ruby>で<ruby>禁止<rt>きんし</rt></ruby>されている。",
    exKo: "위험물 소지는 법률로 금지되어 있다."
  },
  {
    id: 155,
    word: "撃退",
    reading: "げきたい",
    meaning: "격퇴",
    tag: "日常",
    exJa: "<ruby>免疫力<rt>めんえきりょく</rt></ruby>を<ruby>高<rt>たか</rt></ruby>めて、ウイルスを<ruby>撃退<rt>げきたい</rt></ruby>する。",
    exKo: "면역력을 높여서 바이러스를 격퇴한다."
  },
  {
    id: 156,
    word: "土壌",
    reading: "どじょう",
    meaning: "토양",
    tag: "日常",
    exJa: "<ruby>豊<rt>ゆた</rt></ruby>かな<ruby>土壌<rt>どじょう</rt></ruby>が、<ruby>美味<rt>おい</rt></ruby>しい<ruby>野菜<rt>やさい</rt></ruby>を<ruby>育<rt>そだ</rt></ruby>てる。",
    exKo: "비옥한 토양이 맛있는 채소를 기른다."
  },
  {
    id: 157,
    word: "劣悪",
    reading: "れつあく",
    meaning: "열악",
    tag: "日常",
    exJa: "<ruby>劣悪<rt>れつあく</rt></ruby>な<ruby>労働<rt>ろうどう</rt></ruby><ruby>環境<rt>かんきょう</rt></ruby>を<ruby>改善<rt>かいぜん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。",
    exKo: "열악한 노동 환경을 개선할 필요가 있다."
  },
  {
    id: 158,
    word: "保証",
    reading: "ほしょう",
    meaning: "보증",
    tag: "日常",
    exJa: この<ruby>製品<rt>せいひん</rt></ruby>には<ruby>一年<rt>いちねん</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby><ruby>保証<rt>ほしょう</rt></ruby>がついている。",
    exKo: "이 제품에는 1년의 품질 보증이 붙어 있다."
  },
  {
    id: 159,
    word: "控える",
    reading: "ひかえる",
    meaning: "삼가다, 앞두다, 대기하다",
    tag: "日常",
    exJa: "<ruby>健康<rt>けんこう</rt></ruby>のため、<ruby>塩分<rt>えんぶん</rt></ruby>を<ruby>控<rt>ひか</rt></ruby>えるようにしている。",
    exKo: "건강을 위해 염분을 삼가도록 하고 있다."
  },
  {
    id: 160,
    word: "抑える",
    reading: "おさえる",
    meaning: "억누르다, 억제하다",
    tag: "日常",
    exJa: "<ruby>怒<rt>いか</rt></ruby>りを<ruby>抑<rt>おさ</rt></ruby>えて、<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う。",
    exKo: "분노를 억누르고 냉정하게 대화한다."
  },
  {
    id: 161,
    word: "縮小",
    reading: "しゅくしょう",
    meaning: "축소",
    tag: "日常",
    exJa: "<ruby>業績<rt>ぎょうせき</rt></ruby>の<ruby>悪化<rt>あっか</rt></ruby>に<ruby>伴<rt>ともな</rt></ruby>い、<ruby>事業<rt>じぎょう</rt></ruby>を<ruby>縮小<rt>しゅくしょう</rt></ruby>する。",
    exKo: "실적 악화에 따라 사업을 축소한다."
  },
  {
    id: 162,
    word: "いかざるをえない",
    reading: "いかざるをえない",
    meaning: "가지 않을 수 없다 (行かざるを得ない)",
    tag: "日常",
    exJa: "<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出席<rt>しゅっせき</rt></ruby>するため、<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>かざるを<ruby>得<rt>え</rt></ruby>ない。",
    exKo: "회의에 참석하기 위해 도쿄에 갈 수밖에 없다."
  },
  {
    id: 163,
    word: "研修",
    reading: "けんしゅう",
    meaning: "연수",
    tag: "日常",
    exJa: "<ruby>来週<rt>らいしゅう</rt></ruby>から、<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>の<ruby>研修<rt>けんしゅう</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まる。",
    exKo: "다음 주부터 신입 사원 연수가 시작된다."
  },
  {
    id: 164,
    word: "主体",
    reading: "しゅたい",
    meaning: "주체",
    tag: "日常",
    exJa: "<ruby>学生<rt>がくせい</rt></ruby>が<ruby>主体<rt>しゅたい</rt></ruby>となって、イベントを<ruby>企画<rt>きかく</rt></ruby>する。",
    exKo: "학생이 주체가 되어 이벤트를 기획한다."
  },
  {
    id: 165,
    word: "陥る",
    reading: "おちいる",
    meaning: "빠지다, (좋지 않은 상태에) 떨어지다",
    tag: "日常",
    exJa: "<ruby>資金<rt>しきん</rt></ruby><ruby>不足<rt>ふそく</rt></ruby>により、<ruby>経営<rt>けいえい</rt></ruby><ruby>危機<rt>きき</rt></ruby>に<ruby>陥<rt>おちい</rt></ruby>る。",
    exKo: "자금 부족으로 인해 경영 위기에 빠지다."
  },
  {
    id: 166,
    word: "配属",
    reading: "はいぞく",
    meaning: "배속",
    tag: "日常",
    exJa: "<ruby>研修<rt>けんしゅう</rt></ruby>を<ruby>終<rt>お</rt></ruby>えて、<ruby>営業部<rt>えいぎょうぶ</rt></ruby>に<ruby>配属<rt>はいぞく</rt></ruby>された。",
    exKo: "연수를 마치고 영업부에 배속되었다."
  },
  {
    id: 167,
    word: "につれて",
    reading: "につれて",
    meaning: "~함에 따라",
    tag: "日常",
    exJa: "<ruby>標高<rt>ひょうこう</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなるにつれて、<ruby>気温<rt>きおん</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がる。",
    exKo: "표고가 높아짐에 따라 기온이 내려간다."
  },
  {
    id: 168,
    word: "減少",
    reading: "げんしょう",
    meaning: "감소",
    tag: "日常",
    exJa: "<ruby>少子化<rt>しょうしか</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>で、<ruby>学生<rt>がくせい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が<ruby>減少<rt>げんしょう</rt></ruby>している。",
    exKo: "저출산의 영향으로 학생 수가 감소하고 있다."
  },
  {
    id: 169,
    word: "差し控える",
    reading: "さしひかえる",
    meaning: "삼가다, 보류하다",
    tag: "日常",
    exJa: "<ruby>個人<rt>こじん</rt></ruby>のプライバシーに<ruby>関<rt>かん</rt></ruby>する<ruby>発言<rt>はつげん</rt></ruby>は<ruby>差<rt>さ</rt></ruby>し<ruby>控<rt>ひか</rt></ruby>える。",
    exKo: "개인의 사생활에 관한 발언은 삼간다."
  },
  {
    id: 170,
    word: "気難しい",
    reading: "きむずかしい",
    meaning: "까다롭다",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>気難<rt>きむずか</rt></ruby>しくて、なかなか<ruby>打<rt>う</rt></ruby>ち<ruby>解<rt>と</rt></ruby>けられない。",
    exKo: "그는 까다로워서 좀처럼 터놓고 지내기 어렵다."
  },
  {
    id: 171,
    word: "善行",
    reading: "ぜんこう",
    meaning: "선행",
    tag: "日常",
    exJa: "<ruby>日々<rt>ひび</rt></ruby>の<ruby>小<rt>ちい</rt></ruby>さな<ruby>善行<rt>ぜんこう</rt></ruby>が、<ruby>人々<rt>ひとびと</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>を<ruby>温<rt>あたた</rt></ruby>める。",
    exKo: "매일의 작은 선행이 사람들의 마음을 따뜻하게 한다."
  },
  {
    id: 172,
    word: "勘弁してくれ",
    reading: "かんべんしてくれ",
    meaning: "용서해 줘, 봐 줘",
    tag: "日常",
    exJa: "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>まで<ruby>仕事<rt>しごと</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>は<ruby>勘弁<rt>かんべん</rt></ruby>してくれ。",
    exKo: "쉬는 날까지 일 이야기는 제발 봐 줘."
  },
  {
    id: 173,
    word: "悪態をつく",
    reading: "あくたいをつく",
    meaning: "악담을 퍼붓다, 욕을 하다",
    tag: "日常",
    exJa: "<ruby>負<rt>ま</rt></ruby>けた<ruby>悔<rt>くや</rt></ruby>しさから、<ruby>相手<rt>あいて</rt></ruby>に<ruby>悪態<rt>あくたい</rt></ruby>をつく。",
    exKo: "진 분함에 상대에게 악담을 퍼붓는다."
  },
  {
    id: 174,
    word: "言いつける",
    reading: "いいつける",
    meaning: "분부하다, 고자질하다",
    tag: "日常",
    exJa: "<ruby>弟<rt>おとうと</rt></ruby>のいたずらを<ruby>母<rt>はは</rt></ruby>に<ruby>言<rt>い</rt></ruby>いつける。",
    exKo: "남동생의 장난을 어머니에게 고자질하다."
  },
  {
    id: 175,
    word: "就業",
    reading: "しゅうぎょう",
    meaning: "취업, 업무 시작",
    tag: "日常",
    exJa: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>規則<rt>きそく</rt></ruby>は、<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>就業日<rt>しゅうぎょうび</rt></ruby>から<ruby>適用<rt>てきよう</rt></ruby>される。",
    exKo: "새로운 규칙은 다음 달 업무 시작일부터 적용된다."
  },
  {
    id: 176,
    word: "就業時間",
    reading: "しゅうぎょうじかん",
    meaning: "근무 시간, 취업 시간",
    tag: "日常",
    exJa: "<ruby>就業時間中<rt>しゅうぎょうじかんちゅう</rt></ruby>は、<ruby>私語<rt>しご</rt></ruby>を<ruby>慎<rt>つつし</rt></ruby>むべきだ。",
    exKo: "근무 시간 중에는 잡담을 삼가야 한다."
  },
  {
    id: 177,
    word: "路線",
    reading: "ろせん",
    meaning: "노선",
    tag: "日常",
    exJa: "<ruby>台風<rt>たいふう</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>で、<ruby>多<rt>おお</rt></ruby>くの<ruby>路線<rt>ろせん</rt></ruby>が<ruby>運休<rt>うんきゅう</rt></ruby>している。",
    exKo: "태풍의 영향으로 많은 노선이 운행을 중단하고 있다."
  },
  {
    id: 178,
    word: "単独",
    reading: "たんどく",
    meaning: "단독",
    tag: "日常",
    exJa: "<ruby>今回<rt>こんかい</rt></ruby>の<ruby>事件<rt>じけん</rt></ruby>は、<ruby>彼<rt>かれ</rt></ruby>の<ruby>単独犯行<rt>たんどくはんこう</rt></ruby>だった。",
    exKo: "이번 사건은 그의 단독 범행이었다."
  },
  {
    id: 179,
    word: "混在",
    reading: "こんざい",
    meaning: "혼재",
    tag: "日常",
    exJa: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>建物<rt>たてもの</rt></ruby>と<ruby>古<rt>ふる</rt></ruby>い<ruby>町並<rt>まちな</rt></ruby>みが<ruby>混在<rt>こんざい</rt></ruby>している。",
    exKo: "새로운 건물과 낡은 거리가 혼재되어 있다."
  },
  {
    id: 180,
    word: "容易",
    reading: "ようい",
    meaning: "용이, 쉬움",
    tag: "日常",
    exJa: この<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>するのは、<ruby>決<rt>けっ</rt></ruby>して<ruby>容易<rt>ようい</rt></ruby>ではない。",
    exKo: "이 문제를 해결하는 것은 결코 쉽지 않다."
  },
  {
    id: 181,
    word: "直通",
    reading: "ちょくつう",
    meaning: "직통",
    tag: "日常",
    exJa: "<ruby>空港<rt>くうこう</rt></ruby>まで<ruby>直通<rt>ちょくつう</rt></ruby>のバスが<ruby>出<rt>で</rt></ruby>ている。",
    exKo: "공항까지 직통 버스가 운행되고 있다."
  },
  {
    id: 182,
    word: "乗り入れる",
    reading: "のりいれる",
    meaning: "(교통기관이) 연장 운행하다, 타고 들어가다",
    tag: "日常",
    exJa: "<ruby>地下鉄<rt>ちかてつ</rt></ruby>が<ruby>郊外<rt>こうがい</rt></ruby>まで<ruby>乗<rt>の</rt></ruby>り<ruby>入<rt>い</rt></ruby>れている。",
    exKo: "지하철이 교외까지 연장 운행하고 있다."
  },
  {
    id: 183,
    word: "郊外",
    reading: "こうがい",
    meaning: "교외",
    tag: "日常",
    exJa: "<ruby>将来<rt>しょうらい</rt></ruby>は、<ruby>静<rt>しず</rt></ruby>かな<ruby>郊外<rt>こうがい</rt></ruby>に<ruby>家<rt>いえ</rt></ruby>を<ruby>建<rt>た</rt></ruby>てたい。",
    exKo: "장래에는 조용한 교외에 집을 짓고 싶다."
  },
  {
    id: 184,
    word: "からなる",
    reading: "からなる",
    meaning: "~로 이루어지다",
    tag: "日常",
    exJa: この<ruby>委員会<rt>いいんかい</rt></ruby>は、<ruby>五人<rt>ごにん</rt></ruby>の<ruby>専門家<rt>せんもんか</rt></ruby>からなる。",
    exKo: "이 위원회는 다섯 명의 전문가로 이루어져 있다."
  },
  {
    id: 185,
    word: "耳慣れる",
    reading: "みみなれる",
    meaning: "귀에 익다",
    tag: "日常",
    exJa: ラジオから、<ruby>耳慣<rt>みみな</rt></ruby>れた<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れてきた。",
    exKo: "라디오에서 귀에 익은 음악이 흘러나왔다."
  },
  {
    id: 186,
    word: "扱える",
    reading: "あつかえる",
    meaning: "다룰 수 있다",
    tag: "日常",
    exJa: "<ruby>最新<rt>さいしん</rt></ruby>のソフトを<ruby>自由<rt>じゆう</rt></ruby>に<ruby>扱<rt>あつか</rt></ruby>える<ruby>人材<rt>じんざい</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しい。",
    exKo: "최신 소프트웨어를 자유롭게 다룰 수 있는 인재를 원한다."
  },
  {
    id: 187,
    word: "仕組み",
    reading: "しくみ",
    meaning: "구조, 짜임새",
    tag: "日常",
    exJa: "<ruby>人体<rt>じんたい</rt></ruby>の<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>仕組<rt>しく</rt></ruby>みについて<ruby>学<rt>まな</rt></ruby>ぶ。",
    exKo: "인체의 복잡한 구조에 대해 배운다."
  },
  {
    id: 188,
    word: "扱い切る",
    reading: "あつかいきる",
    meaning: "다 다루다, 감당해내다",
    tag: "日常",
    exJa: "<ruby>膨大<rt>ぼうだい</rt></ruby>なデータを<ruby>一人<rt>ひとり</rt></ruby>では<ruby>扱<rt>あつか</rt></ruby>い<ruby>切<rt>き</rt></ruby>れない。",
    exKo: "방대한 데이터를 혼자서는 다 감당해낼 수 없다."
  },
  {
    id: 189,
    word: "かつ",
    reading: "かつ",
    meaning: "또한, 동시에",
    tag: "日常",
    exJa: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>学者<rt>がくしゃ</rt></ruby>であり、かつ<ruby>立派<rt>りっぱ</rt></ruby>な<ruby>教育者<rt>きょういくしゃ</rt></ruby>だ。",
    exKo: "그는 우수한 학자이며 동시에 훌륭한 교육자다."
  },
  {
    id: 190,
    word: "行える",
    reading: "おこなえる",
    meaning: "행할 수 있다",
    tag: "日常",
    exJa: スマホさえあれば、どこでも<ruby>決済<rt>けっさい</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>える。",
    exKo: "스마트폰만 있으면 어디서든 결제를 행할 수 있다."
  },
  {
    id: 191,
    word: "既存",
    reading: "きぞん",
    meaning: "기존",
    tag: "日常",
    exJa: "<ruby>既存<rt>きぞん</rt></ruby>のシステムを<ruby>見直<rt>みなお</rt></ruby>し、<ruby>新<rt>あたら</rt></ruby>しく<ruby>作<rt>つく</rt></ruby>り<ruby>変<rt>か</rt></ruby>える。",
    exKo: "기존 시스템을 재검토하여 새롭게 다시 만든다."
  },
  {
    id: 192,
    word: "敷居が高い",
    reading: "しきいがたかい",
    meaning: "문턱이 높다",
    tag: "日常",
    exJa: "<ruby>高級<rt>こうきゅう</rt></ruby>レストランは、<ruby>学生<rt>がくせい</rt></ruby>には<ruby>少<rt>すこ</rt></ruby>し<ruby>敷居<rt>しきい</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い。",
    exKo: "고급 레스토랑은 학생에게는 조금 문턱이 높다."
  },
  {
    id: 193,
    word: "素人",
    reading: "しろうと",
    meaning: "아마추어, 초보자",
    tag: "日常",
    exJa: "<ruby>料理<rt>りょうり</rt></ruby>は<ruby>素人<rt>しろうと</rt></ruby>ですが、<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby><ruby>作<rt>つく</rt></ruby>りました。",
    exKo: "요리는 초보자입니다만, 열심히 만들었습니다."
  },
  {
    id: 194,
    word: "援助",
    reading: "えんじょ",
    meaning: "원조, 지원",
    tag: "日常",
    exJa: "<ruby>被災地<rt>ひさいち</rt></ruby>に<ruby>向<rt>む</rt></ruby>けた<ruby>資金<rt>しきん</rt></ruby><ruby>援助<rt>えんじょ</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める。",
    exKo: "피해 지역을 향한 자금 지원을 요청하다."
  },
  {
    id: 195,
    word: "自主的",
    reading: "じしゅてき",
    meaning: "자주적",
    tag: "日常",
    exJa: "<ruby>生徒<rt>せいと</rt></ruby>たちの<ruby>自主的<rt>じしゅてき</rt></ruby>な<ruby>学習<rt>がくしゅう</rt></ruby>を<ruby>促<rt>うなが</rt></ruby>す。",
    exKo: "학생들의 자주적인 학습을 촉진한다."
  },
  {
    id: 196,
    word: "橋を架ける",
    reading: "はしをかける",
    meaning: "다리를 놓다 (가교 역할을 하다)",
    tag: "日常",
    exJa: "<ruby>両国<rt>りょうこく</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>に<ruby>友好<rt>ゆうこう</rt></ruby>の<ruby>橋<rt>はし</rt></ruby>を<ruby>架<rt>か</rt></ruby>ける。",
    exKo: "양국 관계에 우호의 다리를 놓다."
  },
  {
    id: 197,
    word: "周囲",
    reading: "しゅうい",
    meaning: "주위",
    tag: "日常",
    exJa: "<ruby>学校<rt>がっこう</rt></ruby>の<ruby>周囲<rt>しゅうい</rt></ruby>には<ruby>自然<rt>しぜん</rt></ruby>がたくさんある。",
    exKo: "학교 주위에는 자연이 많이 있다."
  },
  {
    id: 198,
    word: "募集を掛ける",
    reading: "ぼしゅうをかける",
    meaning: "모집하다",
    tag: "日常",
    exJa: "<ruby>新規<rt>しんき</rt></ruby>プロジェクトのメンバーの<ruby>募集<rt>ぼしゅう</rt></ruby>を<ruby>掛<rt>か</rt></ruby>ける。",
    exKo: "신규 프로젝트의 멤버 모집을 한다."
  },
  {
    id: 199,
    word: "対象",
    reading: "たいしょう",
    meaning: "대상",
    tag: "日常",
    exJa: この<ruby>割引<rt>わりびき</rt></ruby>は、<ruby>学生<rt>がくせい</rt></ruby>のみを<ruby>対象<rt>たいしょう</rt></ruby>としています。",
    exKo: "이 할인은 학생만을 대상으로 하고 있습니다."
  },
  {
    id: 200,
    word: "巻き返し",
    reading: "まきかえし",
    meaning: "반격, 열세를 만회함",
    tag: "日常",
    exJa: "<ruby>試合<rt>しあい</rt></ruby>の<ruby>後半<rt>こうはん</rt></ruby>で、<ruby>見事<rt>みごと</rt></ruby>な<ruby>巻<rt>ま</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>しを<ruby>見<rt>み</rt></ruby>せた。",
    exKo: "시합 후반에 멋진 반격을 보여주었다."
  }
];
