import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Breadcrumb} from 'antd';
import MenuPage from '../component/MenuPage'

const mystyle = {
    "#rect:hover": {
        fill: "#4f4d4d"
    },
};
const {Header, Content, Footer, Sider} = Layout;

class HomePage extends React.Component {
    state = {
        collapsed: true,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"/>
                    <MenuPage/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Map Of Office</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={mystyle}>
                            <svg width="499.99999999999994" height="700" xmlns="http://www.w3.org/2000/svg">
                                <g id='table1'>


                                    <rect style={{hover: '#4f4d4d'}} rx="10" id="svg_10" height="100" width="50"
                                          y="213.93923" x="67.35153" stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_11" height="35" width="10" y="222.63033" x="46.97819"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_12" height="35" width="10" y="271.23368" x="46.41953"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_13" height="35" width="10" y="272.90966" x="128.54243"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_14" height="35" width="10" y="224.30631" x="128.54243"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </ g>
                                <g id='table2'>
                                    <rect rx="10" id="svg_20" height="100" width="50" y="82.09567" x="219.30682"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_21" height="35" width="10" y="90.78676" x="198.93348"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_22" height="35" width="10" y="139.39011" x="198.37482"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_23" height="35" width="10" y="141.06609" x="280.49772"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_24" height="35" width="10" y="92.46274" x="280.49772"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table3'>
                                    <rect rx="10" id="svg_25" height="100" width="50" y="80.97835" x="71.8208"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_26" height="35" width="10" y="89.66945" x="51.44746"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_27" height="35" width="10" y="138.27279" x="50.8888"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_28" height="35" width="10" y="139.94877" x="133.0117"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_29" height="35" width="10" y="91.34542" x="133.0117"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table4'>
                                    <rect rx="10" id="svg_30" height="100" width="50" y="212.82192" x="218.1895"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_31" height="35" width="10" y="221.51301" x="197.81616"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_32" height="35" width="10" y="270.11636" x="197.2575"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_33" height="35" width="10" y="271.79234" x="279.38039"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_34" height="35" width="10" y="223.18899" x="279.38039"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table5'>
                                    <rect rx="10" id="svg_35" height="100" width="50" y="83.21298" x="365.67552"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_36" height="35" width="10" y="91.90408" x="345.30218"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_37" height="35" width="10" y="140.50743" x="344.74352"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_38" height="35" width="10" y="142.1834" x="426.86642"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_39" height="35" width="10" y="93.58006" x="426.86642"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table6'>
                                    <rect rx="10" id="svg_40" height="100" width="50" y="212.82192" x="367.3515"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_41" height="35" width="10" y="221.51301" x="346.97816"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_42" height="35" width="10" y="270.11636" x="346.4195"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_43" height="35" width="10" y="271.79234" x="428.5424"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_44" height="35" width="10" y="223.18899" x="428.5424"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table7'>
                                    <rect rx="10" id="svg_45" height="100" width="50" y="512.26322" x="67.91019"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_46" height="35" width="10" y="520.95432" x="47.53685"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_47" height="35" width="10" y="569.55767" x="46.97819"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_48" height="35" width="10" y="571.23365" x="129.10109"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_49" height="35" width="10" y="522.6303" x="129.10109"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table8'>
                                    <rect rx="10" id="svg_50" height="100" width="50" y="380.41966" x="219.86548"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_51" height="35" width="10" y="389.11075" x="199.49214"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_52" height="35" width="10" y="437.7141" x="198.93348"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_53" height="35" width="10" y="439.39008" x="281.05638"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_54" height="35" width="10" y="390.78673" x="281.05638"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table9'>
                                    <rect rx="10" id="svg_55" height="100" width="50" y="379.30234" x="72.37946"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_56" height="35" width="10" y="387.99343" x="52.00612"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_57" height="35" width="10" y="436.59678" x="51.44746"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_58" height="35" width="10" y="438.27276" x="133.57036"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_59" height="35" width="10" y="389.66941" x="133.57036"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table10'>
                                    <rect rx="10" id="svg_60" height="100" width="50" y="511.14591" x="218.74816"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_61" height="35" width="10" y="519.837" x="198.37482"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_62" height="35" width="10" y="568.44035" x="197.81616"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_63" height="35" width="10" y="570.11633" x="279.93905"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_64" height="35" width="10" y="521.51298" x="279.93905"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table11'>
                                    <rect rx="10" id="svg_65" height="100" width="50" y="381.53697" x="366.23418"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_66" height="35" width="10" y="390.22807" x="345.86084"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_67" height="35" width="10" y="438.83142" x="345.30218"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_68" height="35" width="10" y="440.50739" x="427.42508"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_69" height="35" width="10" y="391.90405" x="427.42508"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                                <g id='table12'>
                                    <rect rx="10" id="svg_70" height="100" width="50" y="511.14591" x="367.91016"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_71" height="35" width="10" y="519.837" x="347.53682"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_72" height="35" width="10" y="568.44035" x="346.97816"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_73" height="35" width="10" y="570.11633" x="429.10105"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                    <rect rx="5" id="svg_74" height="35" width="10" y="521.51298" x="429.10105"
                                          stroke-width="1.5" stroke="#000" fill="#fff"/>
                                </g>
                            </svg>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>stayHappy Team for Hackathon 2020</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;
