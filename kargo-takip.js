function getReq(url) {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    }).catch(function () {
        console.log("Booo");
    });
}

let TRACKING_CODE = "158160312958";
let URL_LIST = [
    'https://www.yurticikargo.com/tr/online-servisler/gonderi-sorgula?code=' + TRACKING_CODE,
    'https://www.araskargo.com.tr/trmobile/cargo_tracking_detail.aspx?query=1&querydetail=2&ref_no=&seri_no=&irs_no=&kargo_takip_no=' + TRACKING_CODE,
    'http://service.mngkargo.com.tr/iactive/popup/KargoTakip/link1.asp?k=' + TRACKING_CODE,
    'https://www.suratkargo.com.tr/KargoTakip/?kargotakipno=' + TRACKING_CODE,
    'https://gonderitakip.ptt.gov.tr/Track/Verify?q=' + TRACKING_CODE,
    'https://www.ups.com.tr/WaybillSorgu.aspx?Waybill=' + TRACKING_CODE,
    'https://www.dhl.com/tr-tr/home/tracking.html?tracking-id=' + TRACKING_CODE,
    'https://kargotakip.trendyol.com/?orderNumber=' + TRACKING_CODE,
    'https://www.hepsijet.com/gonderi-takibi/' + TRACKING_CODE,
    'https://www.tnt.com/express/tr_tr/site/shipping-tools/tracking.html?searchType=con&cons=' + TRACKING_CODE,
    'https://www.fedex.com/fedextrack/?action=track&tracknumbers=' + TRACKING_CODE + '&locale=tr_TR&cntry_code=us',
    'https://www.foodman.online/GonderiSorgu.aspx?gonderino=' + TRACKING_CODE,
    'http://85.99.122.231/hareket.asp?har_kod=' + TRACKING_CODE,
    'https://www.geowix.com/kargom-nerede?tracking_code=' + TRACKING_CODE + '&p=1fbe7c33-3226-4aad-aec3-850dc2487597&pfix=',
];

URL_LIST.map(url => {
    console.log(url);
})