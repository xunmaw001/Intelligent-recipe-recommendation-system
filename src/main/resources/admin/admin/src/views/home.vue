<template>
<div class="content" :style='{"padding":"30px"}'>
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"5px 10px","borderRadius":"0px","display":"flex"}' v-if="isAuth('caipuxinxi','首页总数')">
				<div :style='{"background":"red"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{caipuxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>菜谱信息总数</div>
				</div>
			</div>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"5px 10px","borderRadius":"0px","display":"flex"}' v-if="isAuth('pingfenxinxi','首页总数')">
				<div :style='{"background":"red"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{pingfenxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>评分信息总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('caipuxinxi','首页统计')">
                <div id="caipuxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('caipuxinxi','首页统计')">
                <div id="caipuxinxiChart2" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('pingfenxinxi','首页统计')">
                <div id="pingfenxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//3
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            caipuxinxiCount: 0,
            pingfenxinxiCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getcaipuxinxiCount();
    this.caipuxinxiChat1();
    this.caipuxinxiChat2();
    this.getpingfenxinxiCount();
    this.pingfenxinxiChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getcaipuxinxiCount() {
        this.$http({
            url: `caipuxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.caipuxinxiCount = data.data
            }
        })
    },

    caipuxinxiChat1() {
      this.$nextTick(()=>{

        var caipuxinxiChart1 = echarts.init(document.getElementById("caipuxinxiChart1"),'macarons');
        this.$http({
            url: "caipuxinxi/group/caishileixing",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].caishileixing);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].caishileixing
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '菜谱分类统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                caipuxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    caipuxinxiChart1.resize();
                };
            }
        });
      })
    },

    caipuxinxiChat2() {
      this.$nextTick(()=>{

        var caipuxinxiChart2 = echarts.init(document.getElementById("caipuxinxiChart2"),'macarons');
        this.$http({
            url: `caipuxinxi/value/caipumingcheng/fenshu`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].caipumingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].caipumingcheng
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '菜谱评分统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel : {
                            rotate:70
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                caipuxinxiChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    caipuxinxiChart2.resize();
                };
            }
        });
      })
    },





    getpingfenxinxiCount() {
        this.$http({
            url: `pingfenxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.pingfenxinxiCount = data.data
            }
        })
    },

    pingfenxinxiChat1() {
      this.$nextTick(()=>{

        var pingfenxinxiChart1 = echarts.init(document.getElementById("pingfenxinxiChart1"),'macarons');
        this.$http({
            url: "pingfenxinxi/group/pingfenriqi",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].pingfenriqi);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].pingfenriqi
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '每日评分人数统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                        smooth: true
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                pingfenxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    pingfenxinxiChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
