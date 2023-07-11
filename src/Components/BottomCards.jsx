import arrow from '../assets/arrow.svg';
import PieCharts from "./PieCharts";
import downArrow from '../assets/downArrow.svg';
import './BottomCards.css';

export const BottomCards = ({ pieChartData }) => {
    return (
        <>
            <div id='bottom'>
                <div className='products'>
                    <div id='pieChartHeader'>
                        <div className='piChartHeaderText'>
                            <p className='leftText'>Top products</p> <p className='pieChartHeaderRightText'>May - June 2021<img src={downArrow} /></p>
                        </div>
                    </div>
                    <div id='pieChartFooter'>
                        <div id='pieChartDiv'>
                            <PieCharts reqData={pieChartData} />
                        </div>
                        <div id='pieChartText'>
                            <div className='pieChartLabels'>
                                <div className='dot' id='dot1'></div>
                                <div className='labelData'>Product Id<p>55%</p> </div>
                            </div>
                            <div className='pieChartLabels' >
                                <div className='dot' id='dot2'></div>
                                <div className='labelData'>Discount Percentage<p>31%</p> </div>
                            </div>
                            <div className='pieChartLabels'>
                                <div className='dot' id='dot3'></div>
                                <div className='labelData'>Rating<p>14%</p> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='schedule'>
                    <div className='top'>
                        <p className='leftText'>Schedule</p> <p className='rightText'>see all<img src={arrow} /></p>
                    </div>
                    <div className='part'>
                        <div id='firstSidebar'></div>
                        <div className='text'>
                            <p className='title'>Meeting with suppliers from Kuta Bali</p>
                            <p className='time'>14.00-15.00</p>
                            <p className='place'>at Sunset Road, Kuta, Bali </p>
                        </div>
                    </div>
                    <div className='part'>
                        <div id='secondSidebar'></div>
                        <div className='text'>
                            <p className='title'>Check operation at Giga Factory 1</p>
                            <p className='time'>18.00-20.00</p>
                            <p className='place'>at Central Jakarta </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomCards;