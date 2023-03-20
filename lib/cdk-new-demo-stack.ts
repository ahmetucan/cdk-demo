import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from "aws-cdk-lib/aws-ec2";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkNewDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, 'Cdk-demo-vpc', {
      cidr: "10.10.10.0/16",
      maxAzs:1,
      natGateways:0,
    });
    const ec2Instance = new ec2.Instance(this, 'cdk-demo-ec2', {
      instanceName: 'cdk-demo-ec2',
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T2,
        ec2.InstanceSize.MICRO
      ),
      machineImage: new ec2.AmazonLinuxImage({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      vpc: vpc
    })
  }
}
