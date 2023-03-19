import Faq from 'react-faq-component';
import React, {Component} from 'react';

const hover = "hover:bg-gray-100 hover:rounded-lg"
const SpanTitle = (titleName) => {
    return (<span className="font-bold text-xl text-green-700">
        {titleName} page:</span>)
}
const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is this?",
            content:
                <div className="text-lg">
                    <p>
                        <text>Right now, this is just food diary</text>
                    </p>
                    <p>
                        <text>Later on, you can log your gym/cardio training, build own training program or diet and
                            more!
                        </text>
                    </p>
                </div>
        },
        {
            title: "How does this works?",
            content:
                <div>
                    <div>
                        <div>
                            <div className={hover}>
                                {SpanTitle("2.1 Home")}
                                <p>
                                    <text>First-time users, give the information asked on home page and click submit
                                    </text>
                                </p>
                                <p>You'll be redirected to <span className="font-bold">'Show User Data'</span> page</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className={hover}>
                                {SpanTitle("2.2 Show User Data")}
                                <p>Click <span className="font-bold">'Show More'</span> next to your name</p>
                                <p>You'll be redirected to your user <span className="font-bold">'Profile'</span> page
                                </p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className={hover}>
                                {SpanTitle('2.3 Profile')}
                                <div>
                                    <text>Firstly, you will see all the information you provided + more ex.</text>
                                    <ul>
                                        <li>- Basal metabolic rate</li>
                                        <li>- BMI</li>
                                        <li>- Daily and weekly calories</li>
                                        <li>- Macro split: Protein/Carbs/Fat ratio based on your body type</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">There is also 'Foods Eaten' section which is the
                                        core
                                        feature for now</p>
                                    <p>Simply select food from the list or type it which you have consumed in your
                                        day</p>
                                    <p>Type it's quantity and click 'Add New Food'</p>
                                    <p className="font-bold text-lg">You see both, how much calories, protein, carbs and
                                        fat
                                        you have consumed and how much you have left for a day</p>
                                </div>
                                <div>
                                    <p>If you want to delete your user info, you have to remove all the foods from the
                                        eaten list first</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p>
                                <div className={hover}>
                                    {SpanTitle("2.4 Add Food")}
                                    <div className="mt-2">
                                        <p>Add new food to list, give nutritional value per 100g </p>
                                        <p className="font-bold text-lg">When you add new food, please add 'One Portion'
                                            size as grams to name </p>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

        },
        {
            title: "The site doesn't work?",
            content:
                <div className="text-lg">
                    <p>Most likely there is problems with database connection.</p>
                    <p>But if you notice any kind of error in the page.</p>
                    <p>
                        <span className="font-bold">Please contact me at: </span>
                        <span>juhamikael@protonmail.com</span>
                    </p>
                </div>
        },
        {
            title: "Source code",
            content:
                <a href="https://github.com/juhamikael/macro-counter-react-fastapi-postgre">
            <span className="text-blue-700 text-xl text-blue-500 hover:text-blue-800">
                GitHub Repository
            </span>

                </a>
        },
        // {
        //     title: "'I don't like to show my information to other people'",
        //     content:
        //         <div className="text-lg">
        //             <p>Totally understandable, for now there is no option to hide it but there will be lot of
        //                 changes in future, check TODO section
        //             </p>
        //         </div>
        // },
        {
            title: "Help me, I can't delete my user info",
            content:
                <div className="text-lg">
                    <p>
                        <text>You need to clear the <th>'foods eaten'</th> list by clicking</text>
                        <text className="font-bold text-red-500 ml-2 italic">'Delete All Food Data'</text>
                        <text className="ml-2"> before you can delete your user profile</text>
                    </p>
                </div>
        },
        // {
        //     title: "Why this site is slow?",
        //     content:
        //         <div className="text-lg">
        //             <p>
        //                 1. For now, the database is hosted by AWS with free tier so database queries and everything else
        //                 takes longer than normally
        //             </p>
        //             <p>
        //                 2. API is hosted by Heroku with Free and Hobby plan, so this might cause some lagginess aswell.
        //                 Api is being shut after 30min of inactivity
        //             </p>
        //             <p>
        //                 3. This user interface is also hosted by Heroku and is with Free and Hobby plan, so this site is
        //                 also being shut after 30min of inactivity
        //             </p>
        //         </div>
        // },
        {
            title: "TODO",
            content:
                <div className="ml-3 text-lg">
                    <li>User Login, users can't see other users information</li>
                    <li>Possibility to change information</li>
                    <li>Possibility to keep track gym/cardio training</li>
                    <li>Possibility to build own weight-training program</li>
                    <li>Possibility to build own diet</li>
                    <li>Possibility to add a new food from the barcode</li>
                    <p>And more!</p>
                </div>
        },
        {
            title: "Contact",
            content:
                <div className="text-lg">
                    <p>If you want to see some other features, want to help with production or just have any other
                        ideas</p>
                    <p>
                        <span className="font-bold">Please contact me at: </span>
                        <span>Juhamikael@protonmail.com</span>
                    </p>
                </div>
        }

    ]
}


const styles = {
    // bgColor: 'white',
    titleTextSize: "2rem",
    rowTitleTextSize: "1.4rem",
    rowContentTextSize: "1rem",
    titleTextColor: "green",
    linkColor: "blue",
    // rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "n",
    tabFocus: true
};

const FaqSection = () => {
    return (
        // center div
        <div className="flex justify-center ">
            <div className="w-8/12 mt-8">
                <Faq data={data} styles={styles} config={config}/>
            </div>
        </div>
    )
}
export default FaqSection;