import React from 'react';
import { IgrPieChart } from 'igniteui-react-charts';
const data=[
    { MarketShare: 37, Company: "Space Cooling", Summary:"Space Cooling 37%", },
    { MarketShare: 25, Company: "Residential Appliance", Summary:"Residential Appliance 25%",  },
    { MarketShare: 12, Company: "Heating", Summary:"Heating 12%", },
    { MarketShare: 8, Company: "Lighting", Summary:"Lighting 8%", },
    { MarketShare: 18, Company: "Other Services", Summary:"Other Services 18%", },
]
export default function PieChartExplosion () {
    return(<IgrPieChart dataSource={data}
                textStyle="font-size:5rem;"
                
                sliceClick={(s,e)=>{e.isExploded = !e.isExploded;}}
                labelMemberPath="Summary"
                valueMemberPath="MarketShare"
                width="100%"
                height="100%"
                labelsPosition="OutsideEnd"
                labelExtent="30"
                explodedRadius={0.2}
                explodedSlices="1"
                allowSliceExplosion="true"
                radiusFactor={0.7}
                legendLabelMemberPath="Summary"
                startAngle ={-60}/>)

}
