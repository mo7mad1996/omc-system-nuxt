<template>
  <form class="addcustomer my-4" ref="form" @submit.prevent="submit">
    <BaseData :typies="typies" :cities="cities" />

    <hr />
    <Location :zones="zones" :cities="cities" />

    <hr />
    <Responsible :service="service" :jobs="jobs" />

    <hr />
    <Res1 />

    <hr />
    <Res2 />

    <hr />
    <Nots />

    <hr />
    <!-- added by -->
    <!-- location -->

    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import Buttons from '~/components/attraction/InputForm/Buttons'
import Nots from '~/components/attraction/InputForm/Nots'
import Res2 from '~/components/attraction/InputForm/Res2'
import Res1 from '~/components/attraction/InputForm/Res1'
import Responsible from '~/components/attraction/InputForm/Responsible'
import Location from '~/components/attraction/InputForm/Location'
import BaseData from '~/components/attraction/InputForm/BaseData'

export default {
  name: 'InputForm',
  components: { Buttons, Nots, Res2, Res1, Responsible, Location, BaseData },
  data() {
    return {
      typies: [
        'بلاستيك',
        'دوائي',
        'طباعة و تغليف',
        'غذائي',
        'كهرباء و الكترونيات',
        'مخازن و لوجيستيات',
        'مزارع',
        'معدنية ومواد بناء',
        'ورقي و كرتون',
        'اخرى',
      ],
      zones: [
        'الاولى',
        'الثانية',
        'الثالثة',
        'الرابعة',
        'الخامسة',
        'السادسة',
        'مجمع',
        'اخرى',
      ],
      cities: [
        'الاسكندرية',
        'الاسماعيلية',
        'السادات',
        'السادس من أكتوبر',
        'العاشر',
        'العبور',
        'العين السخنة',
        'الفيوم',
        'أبورواش',
        'بني سويف',
        'اخرى',
      ],
      service: [
        'يونيفورم',
        'تشغيل عمال',
        'مستلزمات طبية',
        'إنشاءات صناعية',
        'تعبئة وتغليف',
        'الاستيراد وتصدير',
        'اخرى',
      ],
      jobs: [
        'HR',
        'رئيس مجلس إدارة',
        'مدير انتاج',
        'مدير عام',
        'مدير تنفيذي',
        'مدير إداري',
        'مدير جودة',
        'مدير مالي',
        'مدير مبيعات',
        'مدير مشتريات',
        'اخرى',
      ],
    }
  },
  methods: {
    ...mapActions('customers', ['addCustomer']),
    submit() {
      this.addCustomer(this.$refs.form)
    },
  },
}
</script>

<style lang="scss">
form.addcustomer {
  background-color: #e4dff0;
  margin: 0 40px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px #999;
  box-shadow: 0px 10px 20px #999;

  fieldset {
    margin: 0 15px;
    border: 1px solid #a4a5a8;
    border-radius: 10px;

    legend {
      width: auto;
      font-size: 1.2rem;
      float: unset;
      margin: 0 20px;
      line-height: 1.2rem;
      padding: 10px;
      color: #656a83;
    }

    .input_group {
      display: flex;
      flex-wrap: wrap;
      color: #de0124;

      .input_field {
        padding: 10px;
        width: 30%;
        min-width: 200px;

        label {
          display: block;
          margin-bottom: 10px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        select {
          border: 2px solid #bda3ff;
          background-color: #f5f1ff;
          color: #4d4677;
          appearance: none;
        }
        input {
          border: 2px solid #bda3ff;
          background-color: #f5f1ff;
          color: #5b4fa0;
        }

        select,
        & input:not([type='checkbox']) {
          padding: 5px 8px;
          display: block;
          width: 100%;
          border-radius: 5px;
        }
        .squaredThree {
          width: 20px;
          position: relative;
          margin: 20px;

          input[type='checkbox'] {
            visibility: hidden;

            &:checked + label {
              background: #4ed68b;
            }
            &:checked + label::after {
              opacity: 1;
            }
          }

          label {
            width: 20px;
            height: 20px;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(#b1afaf 0%, #45484d 100%);
            border-radius: 4px;
            box-shadow: inset 0px 1px 1px rgba(87, 67, 221, 0.5),
              0px 1px 0px rgba(255, 255, 255, 0.4);

            &::after {
              content: '';
              width: 12px;
              height: 8px;
              position: absolute;
              top: 4px;
              left: 4px;
              border: 3px solid #fcfff4;
              border-top-color: rgb(252, 255, 244);
              border-top-style: solid;
              border-top-width: 3px;
              border-right-color: rgb(252, 255, 244);
              border-right-style: solid;
              border-right-width: 3px;
              border-top: none;
              border-right: none;
              background: transparent;
              opacity: 0;
              -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
            }

            &:hover::after {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
}
</style>
