var config = {
        style: 'mapbox://styles/sulinjoanna/ck9oo243h0nxx1iqtfenpx0ed',
        accessToken: 'pk.eyJ1Ijoic3VsaW5qb2FubmEiLCJhIjoiY2s0YXUzamp6MDc0azNucXI4c29hbW1xMiJ9.3_tkyn9JlnJP8G84qPQfoQ',
        showMarkers: false,
        theme: 'dark',
        alignment: 'right',
        title: 'COVID-19 & ONLINE SURVEILLANCE',
        subtitle: 'How China\'s contact tracing app is affecting travelers',
        blurb:'need something here. need something here. need something here. need something here. need something here.need something here. need something here. need something here. need something here.need something here. need something here. need something here. need something here. need something here. need something here. need something here. need something here. need something here. need something here.   ',
        byline: 'by Joanna Lin Su',
        chapters: [
            {
                id: 'introduction',
                //title: 'Jan.23',
                description: 'While the US is still developing its contact tracing system for COVID-19, which sees two tech giants Google and Apple working together, China’s contact tracing system, termed the "health code system," has been up and running for three months now.',
                image: 'images/codes.jpg',
                description2: "The \"health code system\" is based on the already existing \"QR code system\". Users have to login into it on their mobile apps, which are hosted by either WeChat or Alipay. The health code system has three colors in representing its users' \"health status\" (see the picture below): green means you are healthy and allowed to travel; yellow means you are suspected of having COVID-19; red means you are confirmed with COVID-19. People who have yellow or red codes are not allowed to  travel.",
                description3: "Although the algorithm about how users are designated certain color codes remains a mystery, the health code still appears almost all over China. In the three months since it’s been launched, we’ve seen how confused users were, how tech giants competed over this big data project, and how the government's national surveillance goal was eventually achieved. It is not mandatory, but when you need the app to be allowed to travel, many end up downloading it, sometimes more than one app.",
                description4:"By trawling the internet using web crawlers, conducting interviews on social media and collecting data from online sources, this article wants to shed some lights on how this contact tracing system became a massive surveillance network riddled with blind spots and shortcomings.",
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
               description:"According to Baidu, the major domestic search engine in mainland China, Beijing ranks the top in searching about the term \"Health Code\". Beijing has the average search rate of 917 times per day during the period from Feb.1 to April.30, followed by Chengdu (621), Wuhan (584), Hangzhou (549), and Tianjin (467). These are all rising metropolises in China flooded with workers coming from less developed areas. Having several apps serving different purposes, Beijing, as the capital city of China, ranks the top.",

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
            },
            {
                id: 'introduction3',
                //title: 'Jan.23',
                image: 'images/legend2.jpg',
                description: "However, when comparing the search data with the population, Hainan and Xinjiang are two major areas that have the most number of people looking up the health code system per million people, in other words per capita. With less population but more searching per capita rate, the Uyghur autonomous region and the tropical island on China’s most southern point stand out. While the reason behind this is still unclear, data show that Shihezi, Karamay, and Turpan, these three cities in Xinjiang Autonomous Region all have more than 120 daily searches in every one million people . A city in Hainan province which only gets 0.7% of the total population of Beijing, namely Baoting, has an average of 184 times daily searches per million people rates about \"Health Code\" in Baidu.",
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
                num: 1,   //区别title
                id: 'wuhan lockdown',
                title: 'Jan. 23 - Wuhan locked down.',
                description: 'Wuhan begins it’s lockdown, 49 days before the nationwide lockdown in Italy and 58 days before the “stay-at-home’ order took place in New York City. No transportation system in Wuhan after the lockdown. Residents could still go out for groceries. Neighborhoods also had social workers to deliver foods and check residents’ health status under the strict “community grid management”.',
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
                num:1,
                id: 'Yuhang',
                title: 'Feb.3 - the first contract tracing app goes online.',
                image: "images/1.JPG",
                description: 'Yuhang, a borough in Hangzhou which houses Alibaba, started developing a new health code system app within mobile payment app Alipay. The system is called “Yuhang Green Code." Four days later, the app, which is the country’s very first experimental health code, goes online. It will soon become a model for other regions to replicate.',
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
                num: 1,
                id: 'Shenzhen',
                title: 'Feb.9 - the battle between Tencent and Alibaba begins.',
                description: 'Tech giant Tencent then develops "iShenzhen", an app within messaging platform WeChat. Since Tencent is based in Shenzhen, it used the region as it’s testing ground, going head-to-head with Alibaba’s contact tracing app that was launched just two days prior. Shenzhen becomes the first city in China that published its own health code system.',
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
                onChapterExit: []
            },
            {
                num:1,
                id: 'Hangzhou',
                title: 'Feb.11 - "Hangzhou City Code" goes online.',
                image: 'images/2.JPG',
                description: 'Back in Hangzhou, where the e-commerce company Alibaba had developed its small-scale contact tracing app for the tiny Yuhang burough, it now launches a scaled-up version of the app covering the entire Hangzhou region.',
                description2:"Rivalry between Alibaba and Tencent is not new, it’s a tale as old as the rivalries between Microsoft and Apple, between Apple and every other tech company. Owned by Alibaba, Alipay is a mobile payment app that hopes to create an entirely \"cashless society\". The system relies heavily on personal identification data. On the other hand, Tencent combines its online payment function with SMS (short messaging service) and social media sharing platform namely “moments” in one simple application, the WeChat.",
                description3:"In the battle of contact tracing apps, the two tech giants began creating  more and more region-specific apps. Though the algorithms behind the codes are still not clearly explained by their providers, Alibaba's health code has been used in more than 200 cities while Tencent's health code has been used by over 800 million people , more than a half of the total population in China, just 25 days after its debut online.",
                location: {
                    center: [120.44414, 30.42042],
                    zoom: 8,
                    pitch: 50,
                    bearing: 10
                },
                onChapterExit: []
            },
            {
                num:1,
                id: 'jingxinxiangzhu',
                title: 'Feb.13 - Beijing started to track its workers.',
                description: 'Another contract tracing apps emerges, this time in Beijing. Jingxinxiangzhu (京心相助), a contact tracing app for workers arriving in Beijing from other cities, goes online. It is housed within WeChat, but was also compatible with Alipay. Beijing authorities require all workers from other cities to undergo a fourteen-days quarantine. Workers who lack stable living conditions in Beijing have to be quarantined at designated hotels. The workers are responsible for paying  for their stay, which costs 500 RMB (71 US dollar) per day, which includes the room fee and cost of food.',
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
                num:1,
                id: 'Hubei',
                title: 'Feb. 24 - Wuhan, the epicenter of COVID-19, starts using contract tracing health code system.',
                description: 'Hubei province\'s QR Health code app goes online. People in Hubei are able to apply for their personal health codes both through WeChat and Alipay.',
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
                title: '👧 Sophie: I checked in and logged my symptoms on the app every day.',
                image: 'images/Hubei.gif',
                description: 'Sophie Lau, 23, went back to her hometown Tianmen in Hubei province for Chinese New Year at the end of January. However Due to the Covid-19 outbreak, she was confined for two months, until the end of March. During those two months, she has not stopped updating her health status on the contract tracing app. She used an application called “E\'huiban” provided by Alipay.',
                description2:'She said she logged into the app with her personal information, travel history and if she came into contact with someone confirmed or suspected of having COVID-19 in the past 14 days. After inputting her initial personal data, she then had to log on to the app everyday to self-report her health status. And each day, right before she submits her daily logs, She checks a box confirming that the information she’s provided is true.',
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
                title: '👩 Ruixian: no QR code, no entry. ',
                description: 'Ruixian, a resident of Hangzhou, was part of the first test group to use the contact tracing app developed by Alibaba.She said that the QR code is checked at the entrances of neighborhoods, markets, malls, airports, and transit stations. If you did not have a green QR code, you were not allowed entry, limiting your access to essential supplies and services. To prevent people from merely using a screenshot of the QR code, the app was developed to dynamically change it daily.',
                description2:"“The most impressive one had a ‘real-time function’,” she said, adding that she noticed it because she herself works at an internet company.",
                description3: "After the Spring festival holiday, Ruixian was finally allowed to return to work in Beijing On March 19. Upon her arrival in Beijing, she had to log into another contract tracing app, specifically to the Beijing area for workers who travel back.",
                description4:"“The moment I finished signing up for it, a government worker from Beijing called me to tell me to self-quarantine in my apartment for 14 days,” she said, adding that she was shocked by how quickly the call was made.",
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
                num:1,
                id: 'China',
                title: 'March 18: the government wants data to be shared between regions.',
                image: 'images/3.JPG',
                description: 'The Chinese government issued a statement emphasizing the importance of promoting a "mutual recognition system between two areas”.',
                description2: 'Since the data was scattered in two organizations, WeChat and Alipay, sharing this data with the central government was the easiest way for the two rivals to cooperate. This marks a historic moment of China’s two tech mammoths coming together to work in one scene.',
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
                num:1,
                id: 'timeline',
                title: 'March 22: Hubei laxes lockdown restrictions.',
                description: 'Hubei Province, where Wuhan is located, cancels its “everyday check-in policy” in the app. According to data from the Chinese government, Hubei reported zero new cases that day. While at the other end of the world, New York State was becoming the epicenter of virus in the US, reporting 4817 new cases that day alone.',
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
                num:1,
                id: 'Hubei',
                title: 'March 25: Transportation system resumes in Hubei.',
                description: 'Roads reopen and the Highway system returns to work in Hubei Province (except for Wuhan).',
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
                title: '👨 Mike: many families being blocked these days just like us.',
                description: 'Mike,who asked to remain anonymous as he works for the Chinese government, traveled with his wife and daughter from Xiaogan, a village in Hubei province, to Beijing but experienced a difficult journey. Mike and his wife filled out their applications on the Beijing contact tracing app Jingxinxaingzhu right after Hubei re-opened. Unlike Ruixian, however, he applied via Alipay.',
                description2: 'The process was smooth until they tried to fill out an application for their 7-year-old daughter. The system rejected their daughter\'s application because she lacked a government-issued ID card. In China, citizens are not required to have this ID until they are 16 years old. Since his daughter was not in the government ID system, her facial recognition in Jingxinxiangzhu failed.',
                description3: 'The system purportedly allows users to bypass the facial recognition step should it fail twice, but that did not happen. He tried to get answers by calling and writing emails to the platform, but was ultimately unsuccessful.',
                description4: 'Mike recalled being restricted entry at a train station because his daughter was not registered in the app. “(The train station worker) told me that there were many families being blocked these days, just like us,” Mike said. He begged the officer  to allow him and his family through, but was told they could not get on the train if they were not registered.',
                description5:'"We asked for solutions, but nobody had a clue." he said.',
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
                title: '👧 Sophie: people on the same train have different experiences.',
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
                id: 'Mengyuan_Beijing',
                title: '👩 Mengyuan: different places have different requirements.',
                image: 'images/GPS.png',
                description: 'The contract tracing QR codes work in some places but not others. Beijing resident Mengyuan Dong had security guards asking her to show her QR code from the Beijing contact tracing app when she entered her office. But more often than not, she relied on a “telecommunication big data pass” provided by phone carriers that tracks users\' GPS data to determine if they’d come into contact with a positive COVID-19 case. It allowed her to gain access to more public places.',
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
                title: '📱💻 Weibo users: different places have different requirements, even inside the same city.',
                image: 'images/weibo.jpg',
                description: 'Users on Weibo, China’s version of Twitter , also complained about the system\'s inconsistency. User with the Weibo ID "机智小天使F" from Jiangsu province complained about being prevented entrance into a shopping mall l because she was using the city-level contact tracing app rather than the province-level app. Similarly in Jiangxi province, user "十二支白鹭鸶飞过秋天的湖泊" witnessed an elderly man getting kicked off a bus simply because his QR code, which he had painstakingly learned how to use, was on Wechat, not on Alipay which was required to ride the bus.',
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
                title: '👧 Sophie: students face punishment if they return to Beijing.',
                //image: './path/to/image/source.png',
                description: 'As a college student studying in Beijing, Sophie was also required to login into her third contact-tracing application “Jingxinxiangzhu”. Although Students are not allowed to return to Beijing now, they must still report their health status and current location in the WeChat mini-program everyday.',
                description2:'“If you go back to Beijing without permission, you will get punished.” Sophie introduced.',
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
                num:1,
                id: 'Wuhan',
                title: 'April 8 - Wuhan re-opens.',
                //image: './path/to/image/source.png',
                description: 'Wuhan the epicenter re-opens after being in lockdown for 76 days. Life in China slowly goes back to normal.',
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
                num:1,
                id: 'Guangzhou',
                title: 'April 10 - a positive case reveals more blind spots.',
                //image: './path/to/image/source.png',
                description: 'Guangzhou city reports a person testing positive for COVID-19 despite displaying no symptoms and hence had been designated a green QR code in all contact tracing apps. This person was traveling from Hubei province, where Wuhan is located and the epicenter of the virus outbreak, a week prior.',
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
                title: '👧 Shiwen: “I could not check into the hotel even with two official health reports just because my code was not green."',
                image: 'images/Shanghai.JPG',
                description: 'Shiwen, a university student traveling from New York to Shanghai in early April, was not allowed to check into her hotel to go into quarantine there simply because her QR code was not green. Having two official health reports (“Out of quarantine report” and “COVID-19 tested negative report”) did not help.',
                description2: '"They still didn’t allow me to check-in simply because my health code was getting delayed in changing from red to green,” she said.',
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
                num:1,
                id: 'Beijing',
                title: 'April 18 - sharing data with a national platform.',
                //image: './path/to/image/source.png',
                description: 'People have been complaining about having to use multiple health codes and contact tracing apps, especially in major metropolitan areas like Beijing-Tianjing-Hebei. But finally, after months of confusing contact tracing efforts, a cooperation between Alibaba and Tencent results from a nationwide data-sharing platform for contact tracing. Residents are now able to travel within this region without applying for different health codes or quarantining for 14 days, but they have to report their personal data to a national platform called "National Government Political Service Platform" (国家政务服务平台).',
                description2: 'Xinhua News Agency promotes the way of transferring data from regional governments to the "National Government Political Service Platform" in achieving "the mutual recognition system between two regions".',
                description3:'Nine days later, 11 other regions all begin sharing their data with the central government.',
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
                description4:'Special thanks......',
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





