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
  }
