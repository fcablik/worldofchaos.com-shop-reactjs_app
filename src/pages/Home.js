import { NavLink } from 'react-router-dom';
import wochEarth from '../img/woch_earth.svg';
import { t } from 'i18next';

export default function Home() {
    return (
        <>
            <div className='welcome-container'>
                <div className='-wc-center-block'>
                    <img className='logo-full' src={wochEarth} alt={t('store.name')} />
                </div>

                {/* <div className='-wc-info-block text-center'>
                    <h4>
                        <span>The Store is closed<br/>at the moment, but you can still</span>
                        <NavLink activeclassname='active' to="/contact" className='-wc-info-text highlight'>
                            &nbsp;contact us
                        </NavLink>.
                    </h4>
                </div> */}

                <div className='-wc-go-shop'>
                    <NavLink activeclassname='active' to="/shop" className='-mb-text svg-action-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="306.442" height="97.306" viewBox="0 0 306.442 97.306">
                            <g id="Group_1101" data-name="Group 1101" transform="translate(0 0)">
                                <g id="Group_1083" data-name="Group 1083" transform="translate(231.613 23.468)">
                                    <path id="Path_100" data-name="Path 100" d="M547.508,1233.023a19.525,19.525,0,0,0,2.424-.388,32.494,32.494,0,0,0,5.987-1.939,7.577,7.577,0,0,0,1.915-1.435,4.931,4.931,0,0,0,.7-.869,6.575,6.575,0,0,0,.848-2.086c.348-1.272.577-2.513.824-3.808.542-2.839.725-1.887,1.178-4.749.7-4.421,1.173-8.889,1.551-13.349,1.2.062,2.391.2,3.587.264,10.215.5,21.424.147,30.614-4.848,3.62-1.962,6.806-4.662,8.314-8.579a46.64,46.64,0,0,0,1.5-5.577,19.833,19.833,0,0,0,.8-4.894,15.3,15.3,0,0,0-1.745-6.616c-5.069-10.122-17.117-12.946-27.512-13.287-1.763-.054-3.521-.039-5.284,0-1.956.046-3.91.085-5.866.171-2.572.117-5.134.38-7.684.729-.1-.248-.142-.512-.243-.752-.626-1.489-15.014-3.434-20.3.752s-2.032,7.877-.857,15.994,0,20.229,0,20.229a98.323,98.323,0,0,1,0,12.275c-.436,6.271.537,4.184-1.275,9.051s-1.43,2.782-2.441,5.269-1.738,3.316-1.6,4.682,1.056,1.4,1.056,1.4.886.109,1.1.155c3.314.729,6.571,1.769,9.938,2.179A11.938,11.938,0,0,0,547.508,1233.023Zm23.139-40.189c-.422-.008-1.249-.054-1.648-.07-1-.054-1.986-.116-2.981-.171-.832-.047-1.665-.116-2.5-.171a115.228,115.228,0,0,0-.461-14.667c.389-.683.722-1.4,1.164-2.056a6.123,6.123,0,0,1,1.867-1.993,2.092,2.092,0,0,1,.291-.14c.007-.008.014,0,.024,0a18.389,18.389,0,0,1,3.685-.442c2.441-.109,4.922-.271,7.369-.14a4.6,4.6,0,0,1,.776.528,10.314,10.314,0,0,1,2.133,2.521,9.785,9.785,0,0,1,1.5,4.685,23.161,23.161,0,0,1-1.066,5.453,12.523,12.523,0,0,1-1.479,4.212C577.453,1193.168,573.548,1192.912,570.647,1192.834Z" transform="translate(-532.929 -1159.234)"/>
                                </g>
                                <g id="Group_1084" data-name="Group 1084" transform="translate(0 30.94) rotate(-11)">
                                    <path id="Path_91" data-name="Path 91" d="M42.007,0A42.957,42.957,0,0,0,28.215,2.059a24.742,24.742,0,0,0-11.78,7.586,12.351,12.351,0,0,0-2.4,6.035,7.16,7.16,0,0,0-.161,2.739,10.2,10.2,0,0,0,4.557,7.392c3.344,2.327,7.429,3.258,11.368,4.026.889.427,1.829.752,2.691,1.233.387.217.742.489,1.115.729.009.008.018.016.025.023.082.093.162.2.242.295a.98.98,0,0,1-.234,1.475,10.445,10.445,0,0,1-3.193.929c-3.359-.016-7.938-1.662-11.291-1.421-1.142-2.886-4.371-5.345-10.975-4.228C1.145,30.065-.452,34.108.1,37.374c2.946,3.669,1.674,3.83,6.292,5.1,3.847,1.055,5.121.811,10.341,1.638s17,2.963,22.74,2.995,5.281.346,10.766-1.2c4.328-1.21,9.681-3.014,10.713-7.994a7.863,7.863,0,0,0-1.769-6.205A19.828,19.828,0,0,0,52.2,25.987c-1.046-.558-2.137-1.07-3.224-1.551-1.054-.466-2.116-.892-3.2-1.28a43.564,43.564,0,0,0-4.727-1.412c-.421-.093-.837-.178-1.261-.263-.061-.225.057-1.869.009-2.063,0-.047,0-.047,0-.078,0-.054,0-.132,0-.194,0-.116.015-.341.024-.458.039-.489.056-.791.121-1.287a22.313,22.313,0,0,1,.412-2.3c.063-.264.183-.535.243-.807a8.758,8.758,0,0,1,1.6-1.745,2.254,2.254,0,0,1,.194-.116,3.079,3.079,0,0,1,.994.559,2.387,2.387,0,0,1,.533.721,2.191,2.191,0,0,1,.073.225,8.488,8.488,0,0,0-.63,1.737c-.2,3.281,5.359,6.3,12.41,6.741s12.932-1.862,13.137-5.135a12.7,12.7,0,0,0,.873-3.227c.016-2.094-1.295-4.119-2.667-5.6C64.162,5.27,59.878,3.447,55.8,2.183A48.352,48.352,0,0,0,42.007,0Z" transform="translate(0 0)"/>
                                </g>
                                <g id="Group_1085" data-name="Group 1085" transform="translate(155.131 26.296)">
                                    <path id="Path_92" data-name="Path 92" d="M457.692,1373.053c-3.922-.076-7.877.124-11.786.435-7.989.635-16.813,2.016-23.3,6.835a15.479,15.479,0,0,0-3.127,2.983c-2.724,3.569-3.449,8.4-3.241,12.7a18.233,18.233,0,0,0,3.332,10.335,14.594,14.594,0,0,0,2.311,2.306c8.038,6.656,19.013,7.243,29.148,7.277,2.149.007,4.284.207,6.437.172a56.2,56.2,0,0,0,6.1-.5c.022-.014.024-.048.045-.069a48.878,48.878,0,0,0,14.257-2.8,20.666,20.666,0,0,0,6.89-3.97c3.736-3.556,5.635-9.245,5.961-14.175a14.131,14.131,0,0,0-.658-5.758,17.236,17.236,0,0,0-4.669-6.455,31.8,31.8,0,0,0-2.788-2.4,34.12,34.12,0,0,0-13.237-5.627A60.953,60.953,0,0,0,457.692,1373.053Zm-1.088,10.895a10.184,10.184,0,0,1,2.629.262,9.431,9.431,0,0,1,3.672,2.285,13.494,13.494,0,0,1,2.9,3.321,7.394,7.394,0,0,1,.7,3.714,19.433,19.433,0,0,1-1,5.758,16,16,0,0,1-1.723,3.714,7.988,7.988,0,0,1-.589.794c-.1.117-.191.235-.294.345a.248.248,0,0,1-.046.048,8.423,8.423,0,0,1-1.518.69,10.647,10.647,0,0,1-2.471.318c-1.134-.635-2.191-.815-2.9-.366-.136.007-.009-.007-.136,0-1.911-.076-3.822-.131-5.734-.124h-1.474l-1.088-.021a3.672,3.672,0,0,1-2.924-.911,10.947,10.947,0,0,1-.907-.753,3.965,3.965,0,0,1-.771-1.125,11.669,11.669,0,0,1-.929-2.479,18.593,18.593,0,0,1-.544-3.583,20.185,20.185,0,0,1,.181-4.2,14.433,14.433,0,0,1,.68-2.824,5.6,5.6,0,0,1,1.2-2.182,7.483,7.483,0,0,1,2.04-1.4,11.559,11.559,0,0,1,3.172-.739c1.332-.172,2.672-.262,4.012-.366C454.029,1384.03,455.322,1383.948,456.6,1383.948Z" transform="translate(-416.204 -1373.037)"/>
                                </g>
                                <g id="Group_1086" data-name="Group 1086" transform="matrix(0.999, 0.035, -0.035, 0.999, 79.292, 0)">
                                    <g id="Group_959" data-name="Group 959" transform="translate(0 0)">
                                        <g id="Group_957" data-name="Group 957" transform="translate(0 0)">
                                            <path id="Path_94" data-name="Path 94" d="M13.1,0C5.993-.084.192,2.777.155,6.407-.142,15.553.068,24.7.131,33.846c.036,5.1-.294,10.223.024,15.312A32.646,32.646,0,0,0,.81,54.606c.27,1.136.908,2.058,1.236,3.151a19.052,19.052,0,0,1,.679,4.4C2.765,66,8.894,69.03,16.4,68.937s13.541-3.288,13.5-7.122a25.7,25.7,0,0,0-1.091-6.166,16.668,16.668,0,0,0-.873-2.084A2.65,2.65,0,0,1,27.691,53c-.149-.922-.289-1.836-.388-2.767-.531-5.064-.414-10.188-.654-15.269-.187-3.954-.465-7.9-.631-11.854q-.342-8.186-.121-16.38C25.935,3.093,20.205.1,13.1,0Z"/>
                                        </g>
                                        <g id="Group_958" data-name="Group 958" transform="translate(7.983 25.606)">
                                            <path id="Path_95" data-name="Path 95" d="M24.192.087a63.889,63.889,0,0,0-9.332,1.176c-1.692.341-3.338.818-5.018,1.227A45.55,45.55,0,0,0,.22,5.6c-1.1,2.547,2.048,6.739,7.03,9.346s9.9,2.65,11,.111a.74.74,0,0,0,.121-.06c-.058.034.13-.034.194-.051.342-.077.676-.162,1.018-.239.98-.222,1.957-.469,2.933-.716a19.313,19.313,0,0,1,4.921-.724,39.893,39.893,0,0,1,4.921.562c.32.043.641.1.97.136.028.06.05.128.073.179.209.537.41,1.065.606,1.6a26.927,26.927,0,0,1,1.405,5.035,64.859,64.859,0,0,1,.437,9.372c.026,1.8.122,3.587.267,5.376.056,3.825,6.172,6.816,13.67,6.68s13.534-3.331,13.478-7.157c-.43-4.788-.081-9.644-.752-14.407a32.022,32.022,0,0,0-2.109-7.4,21.479,21.479,0,0,0-2.012-4.209,15.733,15.733,0,0,0-6.835-5.316A38.65,38.65,0,0,0,40.045.939C37.91.718,35.76.428,33.622.249A71.076,71.076,0,0,0,24.192.087Z" transform="translate(0 0)"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
