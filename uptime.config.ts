// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "LoliaFRP节点外部监控",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://docs.lolia.link/', label: '查看文档' },
    { link: 'https://lolia.link', label: '返回官网', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: '37',
      name: '阿里云北京-1',
      method: 'TCP_PING',
      target: 'cn-bj-3.qwq.fan:10000',
      timeout: 5000,
    },
    {
      id: '6',
      name: '腾讯云北京-1',
      method: 'TCP_PING',
      target: 'cn-bj-1.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '40',
      name: '腾讯云北京-2',
      method: 'TCP_PING',
      target: 'cn-bj-4.qwq.fan:30000',
      timeout: 5000,
    },
    {
      id: '29',
      name: '百度云北京-1',
      method: 'TCP_PING',
      target: 'cn-bj-2.qwq.fan:20000',
      timeout: 5000,
    },
    {
      id: '49',
      name: '[主力]上海移动-1',
      method: 'TCP_PING',
      target: 'speedtest.sh-2.qwq.fan:10721',
      timeout: 5000,
    },
    {
      id: '33',
      name: '上海阿里云-1',
      method: 'TCP_PING',
      target: 'cn-sh-1.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '10',
      name: '阿里云杭州-1',
      method: 'TCP_PING',
      target: 'cn-hz-1.qwq.fan:10000',
      timeout: 5000,
    },
    {
      id: '32',
      name: '青岛联通-1',
      method: 'TCP_PING',
      target: 'cn-qd-1.qwq.fan:12000',
      timeout: 5000,
    },
    {
      id: '14',
      name: '阿里云武汉-1',
      method: 'TCP_PING',
      target: 'cn-wh-1.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '42',
      name: '阿里云成都-1',
      method: 'TCP_PING',
      target: 'cn-cd-1.qwq.fan:37000',
      timeout: 5000,
    },
    {
      id: '50',
      name: '成都电信-1',
      method: 'TCP_PING',
      target: 'cn-cd-2.qwq.fan:40000',
      timeout: 5000,
    },
    {
      id: '1',
      name: '阿里云广州-1',
      method: 'TCP_PING',
      target: 'cn-gz-1.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '28',
      name: '绍兴电信-1',
      method: 'TCP_PING',
      target: 'cn-sx-1.qwq.fan:20142',
      timeout: 5000,
    },
    {
      id: '26',
      name: '宁波联通-1',
      method: 'TCP_PING',
      target: 'cn-nb-4.qwq.fan:20000',
      timeout: 5000,
    },
    {
      id: '9',
      name: '宁波电信-1',
      method: 'TCP_PING',
      target: 'cn-nb-1.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '22',
      name: '[主力]西安电信-1',
      method: 'TCP_PING',
      target: 'speedtest.cn-xa-1.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '17',
      name: '德阳电信-1',
      method: 'TCP_PING',
      target: 'cn-dy-1.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '18',
      name: '中国香港-2',
      method: 'TCP_PING',
      target: 'hk-2.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '44',
      name: '中国香港-3',
      method: 'TCP_PING',
      target: 'hk-3.qwq.fan:20001',
      timeout: 5000,
    },
    {
      id: '30',
      name: '中国香港-4',
      method: 'TCP_PING',
      target: 'hk-4.qwq.fan:10000',
      timeout: 5000,
    },
    {
      id: '34',
      name: '中国香港-5',
      method: 'TCP_PING',
      target: 'hk-5.qwq.fan:40000',
      timeout: 5000,
    },
    {
      id: '35',
      name: '中国香港-6',
      method: 'TCP_PING',
      target: 'hk-6.qwq.fan:17000',
      timeout: 5000,
    },
    {
      id: '45',
      name: '中国香港-7',
      method: 'TCP_PING',
      target: 'hk-7.qwq.fan:7000',
      timeout: 5000,
    },
    {
      id: '47',
      name: '中国香港-8',
      method: 'TCP_PING',
      target: 'hk-8.qwq.fan:25566',
      timeout: 5000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['29'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: '温馨提示',
    // Description of the maintenance, will be shown at status page
    body: 'LoliaFRP 各节点及官网 API 等正在短时间内遭受频繁的 DDOS 攻击，对此如果节点出现不稳定现象敬请谅解，请各位非必要请勿随意泄露节点 IP，网站类应用可使用 CDN 服务器防护，感谢大家的支持与理解',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2026-07-28T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2026-08-10T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
