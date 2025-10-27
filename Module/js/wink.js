/******************************
Wink - Unlock Forever VIP
Original Author: Hausd0rff
Source: yqc007/QuantumultX
Last Updated: 2023-05-30
Clean version (no obfuscated code, no popup)
*******************************/

var body = $response.body;
var hausd0rff = JSON.parse(body);

hausd0rff.data = {
    active_sub_type: 2,
    account_type: 1,
    sub_type_name: "续期",
    active_sub_order_id: "7069961436604422668",
    trial_period_invalid_time: "",
    current_order_invalid_time: "32495508000000",
    active_order_id: "7069961436340181123",
    limit_type: 0,
    active_sub_type_name: "续期",
    use_vip: true,
    have_valid_contract: true,
    derive_type_name: "普通会员",
    derive_type: 1,
    in_trial_period: false,
    is_vip: true,
    membership: {
        id: "4",
        display_name: "Wink会员",
        level: 1,
        level_name: "普通会员"
    },
    active_promotion_status_list: [2],
    sub_type: 2,
    account_id: "1230010086",
    invalid_time: "32495529599000",
    valid_time: "1569664800000",
    active_product_id: "0",
    active_promotion_status: 2,
    show_renew_flag: true
};

$done({
    body: JSON.stringify(hausd0rff)
});
