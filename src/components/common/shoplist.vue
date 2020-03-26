<template>
  <div>
    <div class="shop_container">
      <ul class="list">
        <router-link tag='li' :to="{path: 'shop', query: {shopId: item.id}}" class="item" v-for="(item, index) in shopListArr" :key="index">
          <section>
            <img :src="'http://elm.cangdu.org/img/' + item.image_path" class="shop_img" alt="">
          </section>
          <div class="shop_item_right">
            <div class="shop_item_header">
              <div class="left">
                <span>品牌</span>
                <h3>{{item.name}}</h3>
              </div>
              <div class="right"><span>保准票</span></div>
            </div>
            <div class="shop_item_center">
              <div class="left">
                <rating-star :rating="item.rating"></rating-star>
                <div class="star_shop">
                  <span class="rating_num">{{item.rating}}</span>
                  <span class="order_section">月售{{item.recent_order_num}}单</span>
                </div>
              </div>
              <div class="right">
                <span>蜂鸟专送</span>
                <span>准时达</span>
              </div>
            </div>
            <div class="shop_item_footer">
              <div class="left">
                <p>
                  ¥<span>{{item.float_minimum_order_amount}}</span>起送 / 配送费约 ¥<span>{{item.float_delivery_fee}}</span>
                </p>
              </div>
              <div class="right">
                <p>
                  <span>{{item.distance}}</span> / <span class="time_shop">{{item.order_lead_time}}</span>
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import ratingStar from './ratingStar'
export default {
  data () {
    return {
      shopListArr: [
        {
          id: 1,
          name: '效果演示',
          recent_order_num: 106,
          rating_count: 961,
          rating: 4.7,
          image_path: '164ad0b6a3917599.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '1383.8公里',
          order_lead_time: '14小时45分钟'
        },
        {
          id: 2,
          name: '黄焖鸡',
          recent_order_num: 100,
          rating_count: 961,
          rating: 5,
          image_path: '170f121ca2e65129.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '1715.8公里',
          order_lead_time: '18小时12分钟'
        },
        {
          id: 3,
          name: '片皮鸭',
          recent_order_num: 831,
          rating_count: 961,
          rating: 4.1,
          image_path: '17105dc029965264.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '826.8公里',
          order_lead_time: '8小时57分钟'
        },
        {
          id: 4,
          name: '周麻婆',
          recent_order_num: 601,
          rating_count: 961,
          rating: 4.3,
          image_path: '170dc76197f65002.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 2,
          distance: '126.8公里',
          order_lead_time: '1小时57分钟'
        },
        {
          id: 5,
          name: '一粥七天1',
          recent_order_num: 831,
          rating_count: 961,
          rating: 4.1,
          image_path: '16fc1791d8663342.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '826.8公里',
          order_lead_time: '8小时57分钟'
        },
        {
          id: 6,
          name: '寿司工坊E',
          recent_order_num: 601,
          rating_count: 961,
          rating: 4.3,
          image_path: '16e2f78904857599.png',
          float_minimum_order_amount: 20,
          float_delivery_fee: 2,
          distance: '126.8公里',
          order_lead_time: '1小时57分钟'
        },
        {
          id: 7,
          name: '效果演示',
          recent_order_num: 106,
          rating_count: 961,
          rating: 4.7,
          image_path: '164ad0b6a3917599.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '1383.8公里',
          order_lead_time: '14小时45分钟'
        },
        {
          id: 8,
          name: '黄焖鸡',
          recent_order_num: 100,
          rating_count: 961,
          rating: 5,
          image_path: '170f121ca2e65129.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '1715.8公里',
          order_lead_time: '18小时12分钟'
        },
        {
          id: 9,
          name: '片皮鸭',
          recent_order_num: 831,
          rating_count: 961,
          rating: 4.1,
          image_path: '17105dc029965264.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '826.8公里',
          order_lead_time: '8小时57分钟'
        },
        {
          id: 10,
          name: '周麻婆',
          recent_order_num: 601,
          rating_count: 961,
          rating: 4.3,
          image_path: '170dc76197f65002.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 2,
          distance: '126.8公里',
          order_lead_time: '1小时57分钟'
        },
        {
          id: 11,
          name: '一粥七天1',
          recent_order_num: 831,
          rating_count: 961,
          rating: 4.1,
          image_path: '16fc1791d8663342.jpg',
          float_minimum_order_amount: 20,
          float_delivery_fee: 5,
          distance: '826.8公里',
          order_lead_time: '8小时57分钟'
        },
        {
          id: 12,
          name: '寿司工坊E',
          recent_order_num: 601,
          rating_count: 961,
          rating: 4.3,
          image_path: '16e2f78904857599.png',
          float_minimum_order_amount: 20,
          float_delivery_fee: 2,
          distance: '126.8公里',
          order_lead_time: '1小时57分钟'
        }
      ]
    }
  },
  components: {
    ratingStar
  }
}
</script>

<style lang="scss" scoped>
.shop_container{
  .list{
    .item{
      display: flex;
      padding: 0.14rem 0.08rem;
      border-bottom: 0.5px solid #f1f1f1;
      img{
        width: 0.54rem;
        height: 0.54rem;
        display: block;
        margin-right: 0.08rem;
      }
      .shop_item_right{
        flex: 1;
        .shop_item_header{
          display: flex;
          justify-content: space-between;
          .left{
            span{
              background: #ffd930;
              border-radius: 0.02rem;
              font-size: 0.09rem;
              font-weight: bold;
              color: #333;
              letter-spacing: 1.5px;
              float: left;
            }
            h3{
              font: 0.13rem "PingFangSC-Regular";
              font-weight: 700;
              color: #333;
              float: left;
              padding-left: 0.04rem;
              transform: translateY(-0.03rem);
            }
          }
          .right{
            font-size: 0.18rem;
            color: #999;
            font-size: 0.08rem;
            letter-spacing: 0.02rem;
          }
        }
        .shop_item_center{
          display: flex;
          justify-content: space-between;
          margin-top: 0.08rem;
          .left{
            transform-origin: left;
            .star_shop{
              float: left;
              transform: translateX(0.5rem);
              span{
                float: left;
                font-size: 0.1rem;
              }
              .rating_num{
                color: #ff6000;
                padding: 0 0.04rem;
                transform: translateY(-0.02rem);
              }
              .order_section{
                color: #666;
              }
            }
          }
          .right{
            font-size: 0.06rem;
            transform-origin: right;
            span{
              padding: 1px;
              font-size: 0.06rem;
              &:nth-child(1){
                margin-right: 0.04rem;
                color: #fff;
                background: #3190e8;
                border: 0.5px solid #3190e8;
              }
              &:nth-child(2){
                border: 0.5px solid #3190e8;
                background-color: #fff;
                color: #3190e8;
              }
            }
          }
        }
        .shop_item_footer{
          display: flex;
          justify-content: space-between;
          font-size: 0.1rem;
          color: #666;
          margin-top: 0.08rem;
          padding: 0 0.04rem;
          .left{
            transform-origin: left;
            transform: scale(0.9);
          }
          .right{
            transform-origin: right;
            transform: scale(0.9);
            .time_shop{
              color: #3190e8;
            }
          }
        }
      }
    }
  }
}
</style>
