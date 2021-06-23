export const state = () => ({
  resData: [
    'تجهيز اوراق',
    'رافض',
    'لم يتم الرد',
    'الهاتف مغلق',
    'غير مناسب للعمل',
    'مقابة مؤهلات',
    'اختبار سائقين',
  ],
  week: [
    'السبت',
    'الاحد',
    'الاثنين',
    'الثلاثاء',
    'الاربعاء',
    'الخميس',
    'الجمعه',
  ],
  cities: [
    'الوادي الجديد',
    'الاسكندرية',
    'الاسماعيلية',
    'اسوان',
    'اسيوط',
    'الاقصر',
    'البحر الاحمر',
    'البحيرة',
    'بني سويف',
    'بورسعيد',
    'جنوب سيناء',
    'شمال سيناء',
    'الجيزة',
    'الدقهليه',
    'دمياط',
    'سوهاج',
    'السويس',
    'الشرقيه',
    'الغربيه',
    'الفيوم',
    'القاهرة',
    'القليوبية',
    'قنا',
    'كفرالشيخ',
    'مطروح',
    'المنوفيه',
    'المنيا',
  ],
  qualifications: [
    'لا يقرا و لا يكتب',
    'بدون مؤهل',
    'محو اميه',
    'اعدادية',
    'دبلوم صنايع',
    'دبلوم تجارة',
    'دبلوم زراعة',
    'طالب',
    'مؤهل عالي',
  ],
})

export const getters = {
  resData: (state) => state.resData,
  week: (state) => state.week,
  cities: (state) => state.cities,
  qualifications: (state) => state.qualifications,
}
