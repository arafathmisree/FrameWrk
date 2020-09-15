import React from 'react';

//Apex data loading 
import apexpie from './types/data/pie';
import apexbar from './types/data/bar';
import apexdoughnut from './types/data/doughnut';
import apexline from './types/data/line';

import Apex from "./Apex";
import { Card } from '../Card';
import { Typography } from '../Typography';

export default {
  title: 'Apex',
  component: Apex,
};

export const showcase = (data) => 
<div className="p-0 md:p-12">
    <div className="mb-16">
        <Typography color="primary" type="h1">
            Apex Chart
        </Typography>
        <div className="grid grid-cols-4 gap-4"> 
        <Card  type="primary" >
            <Apex type="line" data={apexline} />
        </Card>
        <Card  type="primary" >
            <Apex type="doughnut" data={apexdoughnut} />
        </Card>
        <Card  type="primary" >
            <Apex type="pie" data={apexpie} />
        </Card>
        <Card  type="primary" >
            <Apex type="bar" data={apexbar} />
        </Card>
        </div>
    </div>
</div>;