set tvip=192.168.0.101
set appName=inkubatorproject
set packageId=2pVrvup0TV
set appId=%packageId%.%appName%
cls
call sdb connect %tvip%
call tizen build-web -- export/
call tizen package -t wgt -s tizen -- export/.buildResult
call xcopy /Y /I "export\.buildResult\%appName%.wgt" "export"
call tizen clean -- export
call tizen install -n %appName%.wgt -t UE49M6300 -- "export"
call sdb shell 0 debug %appId% 300