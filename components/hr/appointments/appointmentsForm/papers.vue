<template>
  <fieldset>
    <legend>الأوراق المطلوبه</legend>
    <div class="input_group">
      <div class="input_field">
        <label>اصل المؤهل</label>
        <div class="radio-group">
          <input
            type="radio"
            id="qualificationok"
            v-model="qualificationFile"
            :value="true"
          />
          <label for="qualificationok" class="mark"></label>
          <label for="qualificationok">موجود</label>
          <input
            type="radio"
            id="qualificationNo"
            v-model="qualificationFile"
            :value="false"
          />
          <label for="qualificationNo" class="mark"></label>
          <label for="qualificationNo">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>اصل شهادة الجيش</label>
        <div class="radio-group">
          <input type="radio" id="armyOK" :value="true" v-model="armyFile" />
          <label for="armyOK" class="mark"></label>
          <label for="armyOK">موجود</label>
          <input type="radio" id="armyNo" :value="false" v-model="armyFile" />
          <label for="armyNo" class="mark"></label>
          <label for="armyNo">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>فيش جنائي</label>
        <div class="radio-group">
          <input
            type="radio"
            id="criminal_recordOk"
            :value="true"
            v-model="criminal_record"
          />
          <label for="criminal_recordOk" class="mark"></label>
          <label for="criminal_recordOk">موجود</label>
          <input
            type="radio"
            id="criminal_recordNo"
            :value="false"
            v-model="criminal_record"
          />
          <label for="criminal_recordNo" class="mark"></label>
          <label for="criminal_recordNo">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>شهادة الميلاد</label>
        <div class="radio-group">
          <input
            type="radio"
            id="birth_certificate_ok"
            :value="true"
            v-model="birth_certificate"
          />
          <label for="birth_certificate_ok" class="mark"></label>
          <label for="birth_certificate_ok">موجود</label>
          <input
            type="radio"
            id="birth_certificate_no"
            :value="false"
            v-model="birth_certificate"
          />
          <label for="birth_certificate_no" class="mark"></label>
          <label for="birth_certificate_no">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>صورة البطاقه</label>
        <div class="radio-group">
          <input
            type="radio"
            id="id_card_ok"
            :value="true"
            v-model="id_card_Copy"
          />
          <label for="id_card_ok" class="mark"></label>
          <label for="id_card_ok">موجود</label>
          <input
            type="radio"
            id="id_card_no"
            :value="false"
            v-model="id_card_Copy"
          />
          <label for="id_card_no" class="mark"></label>
          <label for="id_card_no">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>صور شخصيه</label>
        <div class="radio-group">
          <input type="radio" id="photos_ok" :value="true" v-model="photos" />
          <label for="photos_ok" class="mark"></label>
          <label for="photos_ok">موجود</label>
          <input type="radio" id="photos_no" :value="false" v-model="photos" />
          <label for="photos_no" class="mark"></label>
          <label for="photos_no">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>كعب عمل</label>
        <div class="radio-group">
          <input
            type="radio"
            id="business_certificate_ok"
            :value="true"
            v-model="business_certificate"
          />
          <label for="business_certificate_ok" class="mark"></label>
          <label for="business_certificate_ok">موجود</label>
          <input
            type="radio"
            id="business_certificate_no"
            :value="false"
            v-model="business_certificate"
          />
          <label for="business_certificate_no" class="mark"></label>
          <label for="business_certificate_no">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>استعلام أمني</label>
        <div class="radio-group">
          <input
            type="radio"
            id="security_inquiry_ok"
            :value="true"
            v-model="security_inquiry"
          />
          <label for="security_inquiry_ok" class="mark"></label>
          <label for="security_inquiry_ok">موجود</label>
          <input
            type="radio"
            id="security_inquiry_no"
            :value="false"
            v-model="security_inquiry"
          />
          <label for="security_inquiry_no" class="mark"></label>
          <label for="security_inquiry_no">غير موجود</label>
        </div>
      </div>

      <div class="input_field">
        <label>نموزج 111</label>
        <div class="radio-group">
          <input type="radio" id="form111ok" :value="true" v-model="form111" />
          <label for="form111ok" class="mark"></label>
          <label for="form111ok">موجود</label>
          <input type="radio" id="form111no" :value="false" v-model="form111" />
          <label for="form111no" class="mark"></label>
          <label for="form111no">غير موجود</label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Papers',
  data() {
    return {
      qualificationFile: false,
      armyFile: false,
      criminal_record: false,
      birth_certificate: false,
      id_card_Copy: false,
      photos: false,
      business_certificate: false,
      security_inquiry: false,
      form111: false,
    }
  },

  watch: {
    qualificationFile() {
      this.qualificationFileMutation(this.qualificationFile)
    },
    armyFile() {
      this.armyFileMutation(this.armyFile)
    },
    criminal_record() {
      this.criminal_recordMutation(this.criminal_record)
    },
    birth_certificate() {
      this.birth_certificateMutation(this.birth_certificate)
    },
    id_card_Copy() {
      this.id_card_CopyMutation(this.id_card_Copy)
    },
    photos() {
      this.photosMutation(this.photos)
    },
    business_certificate() {
      this.business_certificateMutation(this.business_certificate)
    },
    security_inquiry() {
      this.security_inquiryMutation(this.security_inquiry)
    },
    form111() {
      this.form111Mutation(this.form111)
    },
  },

  methods: mapMutations('workers', [
    'qualificationFileMutation',
    'armyFileMutation',
    'criminal_recordMutation',
    'birth_certificateMutation',
    'id_card_CopyMutation',
    'photosMutation',
    'business_certificateMutation',
    'security_inquiryMutation',
    'form111Mutation',
  ]),
}
</script>
