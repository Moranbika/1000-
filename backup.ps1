# 1000天营养启航 自动备份脚本
# 每晚23:00由定时任务调用：将项目目录的所有变更提交并推送到 GitHub 远端仓库
# 执行日志写入 backup_log.txt

$ErrorActionPreference = "Stop"
$repo = "E:\1000天营养启航"
$log  = Join-Path $repo "backup_log.txt"
$ts   = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

try {
    Set-Location -LiteralPath $repo
    git add -A | Out-Null
    $changes = git status --porcelain
    if ($changes) {
        git commit -m "auto-backup $ts" | Out-Null
        git push origin main
        $n = @($changes).Count
        Add-Content -LiteralPath $log -Value "$ts | SUCCESS: 提交并推送 $n 个变更"
    } else {
        Add-Content -LiteralPath $log -Value "$ts | NOCHANGE: 无变更，跳过"
    }
} catch {
    Add-Content -LiteralPath $log -Value "$ts | ERROR: $($_.Exception.Message)"
}
