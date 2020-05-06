var config = {
        style: 'mapbox://styles/sulinjoanna/ck9oo243h0nxx1iqtfenpx0ed',
        accessToken: 'pk.eyJ1Ijoic3VsaW5qb2FubmEiLCJhIjoiY2s0YXUzamp6MDc0azNucXI4c29hbW1xMiJ9.3_tkyn9JlnJP8G84qPQfoQ',
        showMarkers: false,
        theme: 'dark',
        alignment: 'right',
        title: 'THE ONLINE SURVEILLANCE',
        subtitle: 'How does the Chinese contact tracing system work so far?',
        byline: 'By a Digital Storyteller',
        //footer: 'Source: source citations, etc.',
        chapters: [
            {
                id: 'introduction',
                //title: 'Jan.23',
                //image: './path/to/image/source.png',
                description: 'In your introduction, you need to explain that China is using QR codes to track people and their health status inside the country and whether this is known or not known outside of China. We need to know the significance of this reporting before you explain how they’re using the QR code. You can’t assume your reader knows any of this. Then you have to explain how the QR color system works.',
                location: {
                    center: [114.266667, 30.583333],
                    zoom: 3,
                    pitch: 20,
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
                    }
                ]
            },
            {
                id: 'wuhan lockdown',
                title: 'Jan.23',
                //image: './path/to/image/source.png',
                description: 'Wuhan began lockdown',
                location: {
                    center: [114.266667, 30.583333],
                    zoom: 10,
                    pitch: 20,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'wuhan lockdown',
                        opacity: 1
                    }
                ],
                onChapterExit: []
            },
            {
                id: 'Yuhang',
                title: 'Feb.3',
                //image: './path/to/image/source.png',
                description: 'Yuhang, a borough in Hangzhou, started developing a new health code system called “Yuhang Green Code.”',
                location: {
                    center: [120.44414, 30.42042],
                    zoom: 10,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Yuhang',
                //title: 'Jan.23',
                //image: './path/to/image/source.png',
                description: 'Green, yellow, red “three colors”’ QR code system. (a brief intro about the system here)',
                location: {
                    center: [114.266667, 30.583333],
                    zoom: 3,
                    pitch: 20,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'Yuhang',
                title: 'Feb.7',
                //image: './path/to/image/source.png',
                description: '"Yuhang Green Code" goes online.',
                location: {
                    center: [120.44414, 30.42042],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'Yuhang',
                        opacity: 1
                    }
                ],

            },
            {
                id: 'Hangzhou',
                title: 'Feb.11',
                //image: './path/to/image/source.png',
                description: '"Hangzhou City Code" goes online.',
                location: {
                    center: [120.44414, 30.42042],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'Hangzhou',
                        opacity: 1
                    }
                ],
                onChapterExit: []
            },
            {
                id: 'story_card_Ruixian',
                title: 'Ruixian',
                //image: './path/to/image/source.png',
                description: 'Ruixian, a resident of Hangzhou, home to China\'s largest e-commerce company, Alibaba, was the first group of audience in China started using the QR health code. The QR code is checked at the entrances of neighborhoods, markets, malls, airports, and transit stations. Working at an Internet company, Ruixian noticed the QR code\'s development as each version was released. “The most impressive one had a ‘real-time function’,” she said. Before that, many people would show their screenshots of the code (to avoid actually opening the app).',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'jingxinxiangzhu',
                title: 'Feb 13',
                //image: './path/to/image/source.png',
                description: 'Jingxinxiangzhu, a contact tracing app for workers arriving in Beijing from other cities, goes online.',
                location: {
                    center: [116.38895, 39.96158],
                    zoom: 10,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'jingxinxiangzhu',
                        opacity: 1
                    }
                ],
                onChapterExit: []
            },
            {
                id: 'timeline',
                title: 'Feb 24',
                //image: './path/to/image/source.png',
                description: 'Hubei province\'s QR Health code goes online.',
                location: {
                    center: [114.266667, 30.583333],
                    zoom: 6,
                    pitch: 30,
                    bearing: 10
                },
                onChapterEnter: [
                    {
                        layer: 'hubei',
                        opacity: 1
                    }
                ],
                onChapterExit: []
            },
            {
                id: 'story_card_Sophie',
                title: 'Sophie',
                image: 'images/Hubei.MP4',
                description: 'Sophie Lau, went back to her hometown Tianmen in Hubei province for Chinese New Year in late January. Due to the Covid-19 outbreak, she was confined at home until the end of March. Since then, she has not stopped updating her health status on the tracking app. In Hubei, she used an application called “E\'huiban” provided by Alipay, a subsidiary of Alibaba.',
                description2:'She said she logged into the app with her personal information including name, national ID number, travel history (from which city, what kind of transportation, address in Hubei province) and whether she came into contact with someone confirmed or suspected to have COVID-19 in the past 14 days. After that, she said she had to log on to the app everyday to self-report her health status, “whether getting fever” and “whether she has come into contact with a person with COVID-19”. She concludes the questionnaire by checking a the box affirming the integrity of her informaiton.',
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
                        opacity: 0
                    }
                ]
            },
            {
                id: 'timeline',
                title: 'March 18',
                //image: './path/to/image/source.png',
                description: 'The Chinese government emphasizes the importance of promoting a "national, unified criterion for health code."',
                location: {
                    center: [113.16916, 30.68632],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            { id: 'story_card_Ruixian',
                title: 'Ruixian',
                //image: './path/to/image/source.png',
                description: 'On March 19, Ruixian flew back to her office in Beijing. This time, she had to apply for another contract tracing application. At the airport in Hangzhou, she filled out the application on Beijing’s  “京心相助” (Jingxinxiangzhu) WeChat Mini-program.',
                description2: '“The moment I finished onboarding, a government worker from Beijing called me on the phone to tell me to self-quarantine in my Beijing’s apartment for fourteen days,” she said. Beijing is the first city in China requiring all workers who travel from other cities to have a fourteen-days quarantine. Ruixian also said that these workers who lack stable living conditions in Beijing have to be quarantined at designated hotels. The workers are responsible to pay for their stay, which costs 500 RMB (71 US dollar) per day, including the room fee and cost of food.',
                location: {
                    center: [113.16916, 30.68632],
                    zoom: 10,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'China',
                title: 'March 20',
                //image: './path/to/image/source.png',
                description: 'The Chinese government raises three possible solutions for developing the so-called "national, unified criterion for health code": data sharing among regional governments; data transferring from regional governments to a national platform; if areas haven’t developed a regional health code, they could use the national platform, or share data with other regional governments',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 4,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'timeline',
                title: 'March 22',
                //image: './path/to/image/source.png',
                description: 'Hubei Province cancells its “everyday check-in policy” in the app.',
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
                id: 'story_card_Sophie',
                title: 'Sophie',
                //image: './path/to/image/source.png',
                description: '“At first, it was said that if you haven’t continued checking-in for three days, the green code would turn yellow. It will also turn yellow if your based area becomes mid-to-high risk. But I have never come across these,” she said. Sophie\'s area was considered low-risk compared with other areas in Hubei Province, so the code turned green after March 22. However, even if you are in a low-risk area, there are still people that have to apply for “code transformation” to turn their red code to yellow then to green. The Chinese government categorizes these people as "confirmed cases", "possible cases", "fever cases", or "cases without symptoms."',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            }, {
                id: 'timeline',
                title: 'March 25',
                //image: './path/to/image/source.png',
                description: 'Highway system returns to work in Hubei Province (except for Wuhan)',
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
                id: 'Mike',
                title: 'Mike',
                //image: './path/to/image/source.png',
                description: 'Mike (anonymous), who traveled with his wife and daughter from Xiaogan, which is a village in Hubei province, experienced a difficult journey to Beijing. Mike and his wife filled out their applications on Jingxinxaingzhu right after Hubei re-opened initially. Unlike Ruixian, he applied via Alipay.',
                description2: 'Everything went smooth until they tried to fill out an application for their 7-year-old daughter using the “entourage application” function. The system rejected their daughter\'s application because she lacked an official, government-issued ID card. In China, citizens are not required to have this ID until they reach 16 years of age. Since his daughter was not in the government ID system, her facial recognition in Jingxinxiangzhu failed',
                description3: 'The system supposedly allows the users to bypass the facial recognition step if it fails twice to scan someone\'s face, but that did not happen after his daugheter\'s two failed attempts to have her face scanned. Mike did not know why. He tried to get answers by calling and writing emails to the platform, but was unsuccessful.',
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
                title: 'Sophie',
                //image: './path/to/image/source.png',
                description: 'Meanwhile, on March 26, the day after the highway system resumed operation, Sophie used her health code in the station. This is the first time for her actually using the code because of her confinement at home. During the same time, she as a resident in Xiamen, also had to apply for the Xiamen\'s QR health Code in the WeChat mini program “iXiamen”. WeChat is the flagship product of Tencent, another Chinese Tech giant. “But it didn’t ask me about where I have been in the past 14 days. I got the green code once I applied for it,” she said.',
                description2: 'When she arrived in Xiamen, she was not asked for her “iXiamen” code. But other travelers were checked and got blocked. “Some people from Hubei province got red codes on ‘iXiamen’. They weren’t allowed to get off the train.”',
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
                id: 'story_card',
                title: 'Sophie',
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
                id: 'story_card',
                title: 'Mengyuan',
                image: 'images/GPS.JPG',
                description: 'Different places have different requirements. The code works in some places but not others, Sophie explained. Beijing resident Mengyuan Dong is also facing this situation. She was asked by security guards for her Beijing code when she entered her office. But more often than not, she relied upon a “telecommunication big data pass” provided by phone carriers that tracks users\' GPS data. It allowed her to get access to more public places.',
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
                id: 'story_card',
                title: 'Mike',
                //image: './path/to/image/source.png',
                description: 'After waiting a few days, Mike\'s and his wife’s applications were approved; they could finally book the train ticket.  Mike said the system will not allow you to make changes to your application once it is approved.',
                description2: 'On April 3, after taking a 400 RMB taxi ride to the train station from where they lived, Mike and his family were blocked by the station workers because their daughter didn’t buy a ticket. Mike said he remembered that one of the station workers checked the list provided by the Chinese Public Security System, which does not have information about his daughter.',
                description3: '“They told me there are many families being blocked these days just like us,” Mike said. He begged them for permission, but was told they could not get on the train if they were not on the list. "We asked about solutions, but nobody gave us a clue." he said. While taking another 400 RMB taxi ride back home, Mike started another round of applications for his family.\n',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            }, {
                id: 'timeline',
                title: 'April 8',
                //image: './path/to/image/source.png',
                description: 'Wuhan the epicenter reopens after on lockdown for 76 days. Life in China is back to normal.',
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
                id: 'story_card',
                title: 'Shiwen',
                image: 'images/Shanghai.JPG',
                description: 'Shiwen, an international student traveling from New York to Shanghai in early April, was blocked when she registered for a hotel after the “fourteen days mandatory quarantine" even she got two official health reports (“Out of quarantine report” and “COVID-19 tested negative report”). "They still didn’t allow me to check-in simply because my health code was getting latency on transferring from red to green,” she said.',
                description2: 'But in Shanghai airport, the staff gave her permission to onboard after seeing her two reports.',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            }, {
                id: 'timeline',
                title: 'April 10',
                //image: './path/to/image/source.png',
                description: 'Guangzhou city reported a confirmed case without symptoms. The person, who held a  “green code” designation, traveled from Hubei on April 4.',
                location: {
                    center: [120.161419, 30.29365],
                    zoom: 5,
                    pitch: 50,
                    bearing: 10
                },
                onChapterEnter: [],
                onChapterExit: []
            }, {
                id: 'timeline',
                title: 'April 18',
                //image: './path/to/image/source.png',
                description: 'Beijing, Tianjing, and Hebei Triangle area achieved sharing data.',
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
                id: 'timeline',
                title: 'April 25',
                //image: './path/to/image/source.png',
                description: 'Foreigners and people from Hongkong, Macau, and Taiwan could apply for Hubei’s health code.',
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
    }
;

