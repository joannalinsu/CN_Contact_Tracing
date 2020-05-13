var config = {
        style: 'mapbox://styles/sulinjoanna/ck9oo243h0nxx1iqtfenpx0ed',
        accessToken: 'pk.eyJ1Ijoic3VsaW5qb2FubmEiLCJhIjoiY2s0YXUzamp6MDc0azNucXI4c29hbW1xMiJ9.3_tkyn9JlnJP8G84qPQfoQ',
        showMarkers: false,
        theme: 'dark',
        alignment: 'right',
        title: 'COVID-19 & ONLINE SURVEILLANCE',
        subtitle: 'How China\'s contact tracing app is affecting travelers',
        blurb:'need something here. need something here. need something here. need something here. need something here. ',
        byline: 'by Joanna Lin Su',
        chapters: [
            {
                id: 'introduction',
                //title: 'Jan.23',
                description: 'While the US is still developing its contact tracing system for COVID-19, which sees two tech giants Google and Apple working together, China’s  contact tracing system, termed the "health code system," has been up and running for three months now.',
                image: 'images/codes.jpg',
                description2: "The so-called \"health code system\" is based on the already existing \"QR code system\". Users have to login in the systems on their mobile apps, majorly are WeChat and Alipay. The health code system has three colors in representing its users' \"health status\" (see the picture above): green means you are healthy and allowed to travel; yellow means you are suspected of getting COVID-19; red means you are confirmed with COVID-19. People who have yellow or red codes will get blocked during travels.",
                description3:"Though the effectiveness of the system is not clear yet, and the algorithms about how users are designated for certain color codes looks like a black-box, it still appears in almost everywhere in the country. In three months, we see how confused the users were, how tech giants competed on this big data project, and how the government's surveillance goal eventually achieved. When you want to travel, you have to apply for one, or even more than one.",
                description4:"By crawling the web, conducting interviews on social media, collecting data from online sources, this article wants to shed some lights on how this contact tracing system came into massive surveillance and what the blind spots are.",
                location: {
                    center: [114.266667, 30.583333],
                    zoom: 4,
                    pitch: 40,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'search',
                        opacity: 1
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'per capita',
                        opacity: 0
                    },
                    {
                        layer: 'Yuhang',
                        opacity: 0
                    },
                    {
                        layer: 'hubei',
                        opacity: 0
                    },
                    {
                        layer: 'jingxinxiangzhu',
                        opacity: 0
                    },
                    {
                        layer: 'Hangzhou',
                        opacity: 0
                    },
                    {
                        layer: 'shenzhen',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'introduction2',
                //title: 'Jan.23',
                image: 'images/legend1.jpg',
               description:"According to Baidu, the major domestic search engine in mainland China, Beijing ranks the top in searching about the term \"Health Code\". Beijing, the capital city of China, has the average search rate of 917 times per day during the period from Feb.1 to April.30, following by Chengdu (621), Wuhan (584), Hangzhou (549), and Tianjin (467). These are all metropolises in China.",

                location: {
                    center: [114.266667, 30.583333],
                    zoom: 5,
                    pitch: 40,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'search',
                        opacity: 1
                    },

                ],
                onChapterExit: [
                    {
                        layer: 'per capita',
                        opacity: 0
                    },
                    {
                        layer: 'Yuhang',
                        opacity: 0
                    },
                    {
                        layer: 'hubei',
                        opacity: 0
                    },
                    {
                        layer: 'jingxinxiangzhu',
                        opacity: 0
                    },
                    {
                        layer: 'Hangzhou',
                        opacity: 0
                    },
                    {
                        layer: 'shenzhen',
                        opacity: 0
                    }
                ]
            },{
                id: 'introduction3',
                //title: 'Jan.23',
                image: 'images/legend2.jpg',
                description:"However, when comparing the searching data with the population, Hainan and Xinjiang are two major areas that have the most “searching per million people” rates. With less population but more searching per capita rate, the Uyghur autonomous region and the tropical island on China’s most southern point stand out. While the reason behind this is still unclear, data show that Shihezi, Karamay, and Turpan, these three cities in Xinjiang Autonomous Region all have more than 120 daily searches in every one million people. A city in Hainan province which only gets 0.7% of the total population of Beijing, namely Baoting, has an average of 184 times daily searches per million people rates about \"Health Code\" in Baidu.",
                location: {
                    center: [103.38571, 34],
                    zoom: 3.5,
                    pitch: 60,
                    bearing: 49
                },
                onChapterEnter: [
                    {
                        layer: 'search',
                        opacity: 1
                    },
                    {
                        layer: 'per capita',
                        opacity: 1
                    },
                ],
                onChapterExit: [
                    {
                        layer: 'Yuhang',
                        opacity: 0
                    },
                    {
                        layer: 'hubei',
                        opacity: 0
                    },
                    {
                        layer: 'jingxinxiangzhu',
                        opacity: 0
                    },
                    {
                        layer: 'Hangzhou',
                        opacity: 0
                    },
                    {
                        layer: 'shenzhen',
                        opacity: 0
                    }
                ]
            },

            {
                id: 'wuhan lockdown',
                title: 'Jan. 23 - the global pandemic started.',
                description: 'Wuhan began lockdown, 49 days before the nation wide lockdown in Italy and 58 days before the “stay-at-home’ order took place in New York City. No transportation system in Wuhan after the lockdown.',
                location: {
                    center: [114.266667, 30.583333],
                    zoom: 10,
                    pitch: 20,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Yuhang',
                title: 'Feb.3 - the first creation goes online.',
                image: "images/1.JPG",
                description: 'Yuhang, a borough in Hangzhou which houses Alibaba, started developing a new health code system in the mobile payment app Alipay. The system is called “Yuhang Green Code." Four days later, the very first experimental health code goes online. It soon becomes a model for other regions to replicate.',
                location: {
                    center: [120.222, 30.42042],
                    zoom: 10,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'Yuhang',
                        opacity: 0.1,
                    }
                ],
                onChapterExit: []
            },
            {
                id: 'Shenzhen',
                title: 'Feb.9 - the battle between Tencent and Alibaba started.',
                description: '"iShenzhen", a WeChat mini-program, goes online. Mini-program is an application embedded in WeChat, the social media app owned by Tencent. Based in Shenzhen, Tencent joined the battle with Alibaba in creating the contact tracing system for regions. Two days ahead of Hangzhou, where Alibaba’s headquarter is, Shenzhen becomes the first city in China that published its own health code system.',
                location: {
                    center: [114.04845, 22.58187],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'shenzhen',
                        opacity: 0.1,
                    }
                ],
            },
            {
                id: 'Hangzhou',
                title: 'Feb.11 - "Hangzhou City Code" goes online.',
                image: 'images/2.JPG',
                description: '1500 kilometers away, Hangzhou is the home to another Chinese tech giant: the e-commerce company, Alibaba. Owned by Alibaba, Alipay, the mobile payment app, helps promoting the notion of  "cashless society". The system relies heavily on personal identification data.',
                description2:"The two tech giants started to create more regional codes, including province code and city code. Though the algorithms behind the codes are still not clearly explained by their providers yet, Alibaba's health code has been seen in more than 200 cities while Tencent's health code has covered 800 million population, more than a half of the total population in China, in only 25 days after its debut online.",
                location: {
                    center: [120.44414, 30.42042],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
            },
            {
                id: 'jingxinxiangzhu',
                title: 'Feb.13 - Beijing started to track its workers.',
                description: 'Jingxinxiangzhu (京心相助), a contact tracing app for workers arriving in Beijing from other cities, goes online. It is based in WeChat, but could also log in by Alipay. Beijing requires all workers who travel from other cities to have a fourteen-days quarantine. Workers who lack stable living conditions in Beijing have to be quarantined at designated hotels.',
                location: {
                    center: [116.38895, 39.96158],
                    zoom: 10,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'jingxinxiangzhu',
                        opacity: 0.1
                    }
                ],
                onChapterExit: []
            },
            {
                id: 'Hubei',
                title: 'Feb. 24 - the epicenter also adapted to this system.',
                description: 'Hubei province\'s QR Health code goes online. People in Hubei could apply for their personal health codes both in WeChat and Alipay.',
                location: {
                    center: [114.266667, 30.583333],
                    zoom: 6,
                    pitch: 30,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'hubei',
                        opacity: 0.1
                    }
                ],
                onChapterExit: []
            },
            {
                id: 'story_card_Sophie',
                title: 'Sophie: I logged in with reporting the personal data, and checked in everyday.',
                image: 'images/Hubei.gif',
                description: 'Sophie Lau went back to her hometown Tianmen in Hubei province for Chinese New Year. Due to the Covid-19 outbreak, she was confined at home until the end of March. Since then, she has not stopped updating her health status on the tracking app. In Hubei, she used an application called “E\'huiban” provided by Alipay.',
                description2:'She said she logged into the app with her personal information including name, national ID number, travel history (from which city, what kind of transportation, address in Hubei province) and whether she came into contact with someone confirmed or suspected to have COVID-19 in the past 14 days. After that, she said she had to log on to the app everyday to self-report her health status, “whether getting fever” and “whether she has come into contact with a person with COVID-19”. She concludes the questionnaire by checking the box affirming the integrity of her information.',
                location: {
                    center: [113.16295, 30.70834],
                    zoom: 8.72,
                    pitch: 45,
                    bearing: -3.64
                },
                onChapterEnter: [
                    {
                        layer: 'per capita',
                        opacity: 1
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'search',
                        opacity: 1
                    }
                ]
            },
            {
                id: 'story_card_Ruixian',
                title: 'Ruixian: the QR code is checked at the entrances.',
                description: 'Ruixian, a resident of Hangzhou, was the first group of audience in China started using the QR health code. According to her, the QR code is checked at the entrances of neighborhoods, markets, malls, airports, and transit stations. Working at an Internet company, Ruixian noticed the QR code\'s development as each version was released. “The most impressive one had a ‘real-time function’,” she said. Before that, many people would show their screenshots of the code (to avoid actually opening the app).',
                location: {
                    center: [120.44414, 30.42042],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'story_card_Ruixian',
                title: 'Ruixian: I was shocked by how quickly the call was.',
                description: 'On March 19, Ruixian flew back to her office in Beijing. This time, she had to apply for another contract tracing application. At the airport in Hangzhou, she filled out the application on Jingxinxiangzhu WeChat Mini-program. “The moment I finished onboarding, a government worker from Beijing called me on the phone to tell me to self-quarantine in my Beijing’s apartment for fourteen days,” she was shocked by how quickly the call was made.',
                location: {
                    center: [120.44414, 30.42042],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'China',
                title: 'March 18: the government wants data to be shared between regions.',
                image: 'images/3.JPG',
                description: 'The Chinese government emphasizes the importance of promoting a "mutual recognition system between two regions."',
                description2: 'Two days later, Mao Qun\'an, the head of National Health Commission, raised three possible solutions for developing the so-called "mutual recognition system between two regions": data sharing between regional governments; data transferring from regional governments to a national platform; if areas haven’t developed a regional health code, they could use the national platform, or share data with other regional governments',
                description3: 'Since the data is scattered in two places, WeChat and Alipay, sharing data with the central government seems to be the easiest way out. This marks the status of two tech giants being in one scene in history.',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 4,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: [
                    {
                        layer: 'Yuhang',
                        opacity: 0
                    },
                    {
                        layer: 'hubei',
                        opacity: 0
                    },
                    {
                        layer: 'jingxinxiangzhu',
                        opacity: 0
                    },
                    {
                        layer: 'Hangzhou',
                        opacity: 0
                    },
                    {
                        layer: 'shenzhen',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'timeline',
                title: 'March 22',
                description: 'Hubei Province cancels its “everyday check-in policy” in the app. According to data from the Chinese government, Hubei reported zero new case that day. At the same time, New York State, the epicenter of the US, reported 4817 new cases that date, according to the tracker from the New York Times.',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
           {
                id: 'Hubei',
                title: 'March 25',
                description: 'Highway system returns to work in Hubei Province (except for Wuhan).',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: []
                ,
                onChapterExit: []
            },
            {
                id: 'Mike_Xiaogan',
                title: 'Mike: there are many families being blocked these days just like us.',
                description: 'Mike (who works for the government and wants to keep anonymous), traveled with his wife and daughter from Xiaogan, which is a village in Hubei province, experienced a difficult journey to Beijing. Mike and his wife filled out their applications on Jingxinxaingzhu right after Hubei re-opened initially. Unlike Ruixian, he applied via Alipay.',
                description2: 'Everything went smooth until they tried to fill out an application for their 7-year-old daughter using the “entourage application” function. The system rejected their daughter\'s application because she lacked an official, government-issued ID card. In China, citizens are not required to have this ID until they reach 16 years of age. Since his daughter was not in the government ID system, her facial recognition in Jingxinxiangzhu failed.',
                description3: 'The system supposedly allows the users to bypass the facial recognition step if it fails twice to scan someone\'s face, but that did not happen after his daugheter\'s two failed attempts to have her face scanned. Mike did not know why. He tried to get answers by calling and writing emails to the platform, but was unsuccessful.',
                description4: 'Mike said he remembered that one of the station workers checked the list provided by the Chinese Public Security System, which does not have information about his daughter. “They told me there are many families being blocked these days just like us,” Mike said. He begged them for permission, but was told they could not get on the train if they were not on the list. "We asked about solutions, but nobody gave us a clue." he said.',
                location: {
                    center: [113.90921, 30.97214],
                    zoom: 8.52,
                    pitch: 45.00,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Sophie_Xiamen',
                title: 'Sophie: people on the same train have different experiences.',
                //image: './path/to/image/source.png',
                description: 'Meanwhile, on March 26, the day after the highway system resumed operation, Sophie used her health code in the station. This is the first time for her actually using the code because of her confinement at home. During the same time, she as a resident in Xiamen, also had to apply for the Xiamen\'s QR health Code in the WeChat mini program “iXiamen”. WeChat is the flagship product of Tencent, another Chinese Tech giant. “But it didn’t ask me about where I have been in the past 14 days. I got the green code once I applied for it,” she said.',
                description2: 'When she arrived in Xiamen, she was not asked for her “iXiamen” code. But other travelers were checked and got blocked. “Some people from Hubei province got red codes on ‘iXiamen’. They weren’t allowed to get off the train.',
                location: {
                    center: [118.30360, 24.44822],
                    zoom: 9.83,
                    pitch: 45,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Mengyuan_Beijing',
                title: 'Mengyuan: different places have different requirements.',
                image: 'images/GPS.png',
                description: 'The code works in some places but not others. Like what Sophie explained, Beijing resident Mengyuan Dong is also facing this situation. She was asked by security guards for her Beijing code when she entered her office. But more often than not, she relied upon a “telecommunication big data pass” provided by phone carriers that tracks users\' GPS data. It allowed her to get access to more public places.',
                location: {
                    center: [116.38895, 39.96158],
                    zoom: 10,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Weibo',
                title: 'Weibo users: different places have different requirements, even inside the same city.',
                image: 'images/weibo.jpg',
                description: 'Users on Weibo, a social media platform known as the Chinese Twitter, also made complained about the system\'s inconsistency.',
                description2:'User with the Weibo ID "机智小天使F" from Jiangsu province complained about getting blocked by a security guard at the mall because she was using the “city code” instead of the “province code”. While in Jiangxi province, user "十二支白鹭鸶飞过秋天的湖泊" described her experience about witnessing an elder getting evicted on the bus simply because the code which he spent time learning was on Wechat, not on Alipay as the bus required.',
                location: {
                    center: [115.97731, 27.43099],
                    zoom: 6,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Sophie_Beijing',
                title: 'Sophie: students have to report everyday about not getting back to Beijing',
                //image: './path/to/image/source.png',
                description: 'As a college student studying in Beijing, Sophie also applied for “Jingxinxiangzhu” WeChat mini-program. Students are currently not allowed return to Beijing now. But they still have to report their health status and current location in the WeChat mini-program everyday. “If you go back to Beijing without permission, you will get punished.” Sophie introduced.',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Wuhan',
                title: 'April 8 - Wuhan re-opens.',
                //image: './path/to/image/source.png',
                description: 'Wuhan the epicenter re-opens after on lockdown for 76 days. Life in China is back to normal.',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Guangzhou',
                title: 'April 10 - a case which traveled without symptoms tested positive later.',
                //image: './path/to/image/source.png',
                description: 'Guangzhou city reported a positive case without symptoms. The person, who held a “green code” designation, traveled from Hubei on April 4, six days before he tested positive.',
                location: {
                    center: [113.26729, 23.17479],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },   {
                id: 'Shiwen_Shanghai',
                title: 'Shiwen: I could not check into the hotel even with two official health reports just because my code was not green.',
                image: 'images/Shanghai.JPG',
                description: 'Shiwen, an international student traveling from New York to Shanghai in early April, was blocked when she registered for a hotel after the “fourteen days mandatory quarantine" even she got two official health reports (“Out of quarantine report” and “COVID-19 tested negative report”). "They still didn’t allow me to check-in simply because my health code was getting latency on transferring from red to green,” she said.',
                description2: 'But in Shanghai airport, the staff gave her permission to onboard after seeing her two reports.',
                location: {
                    center: [121.45675, 31.21288],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },

            {
                id: 'Beijing',
                title: 'April 18 - sharing data with a national platform.',
                //image: './path/to/image/source.png',
                description: 'People complained about applying for multiple health codes on the internet, especially in regions like Beijing-Tianjing-Hebei Metropolitan Region. It finally achieved sharing data in mid April. Residents are able to travel within this region without applying for different health codes or quarantining for 14 days, but they have to report their personal data to a national platform called "National Government Political Service Platform" (国家政务服务平台).',
                description2: 'Xinhua News Agency promotes the way of transferring data from regional governments to the "National Government Political Service Platform" in achieving "the mutual recognition system between two regions".',
                description3:'Nine days later, 11 regions- Shanghai, Beijing, Hubei province, Guangdong province, Zhejiang province, Jiangsu province, Tianjin, Inner Mongolia, Liaoning province, Henan province, and Sichuan province- all achieved in sharing data with the central government.',
                description4: 'Despite the fact that the health code system is having many blind spots, the massive surveillance via people\'s mobile phones has gradually come into place.',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Methods and Sources',
                //image: './path/to/image/source.png',
                description: 'Sources and Methods:',
                description2: 'Data: Baidu Search Index (http://index.baidu.com/), and 2010 Chinese census data. Photos credit to Weibo user "单行道111".',
                description3: 'Methods: the search index data is collected on May 1. Data ranges from Feb.1 to April 30. Searching per million is calculated based on the national census data which is collected once a decade. NEED MORE HERE. ',
                descriptions:'Special thanks......',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            }


        ]
    };





