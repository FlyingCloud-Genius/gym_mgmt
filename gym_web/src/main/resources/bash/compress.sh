#!/bin/bash

#------------------------------
# verify calculat path
# verify model file size and chang data
#------------------------------

SUCCESS="success"
FAIL="fail"

if [ $# -lt 4 ];
then
    echo "parms length is less than four!"
    exit 1
fi

local_path=$1
file_name=$2
temp_file_name=$3
#local_compress_path=$2

local_compress_path=""
 for((i=4;i<=$#;i++));
 do
     eval j=\$$i
     local_compress_path="${local_compress_path} $j "
 done

if [ -d $local_path ];
then
    echo $local_path":文件夹存在"
else
    echo $local_path":文件夹不存在"
    echo $file_name",status:"$FAIL >> $local_path/flag.txt
    exit 1
fi

cd $local_path
echo "/bin/tar -czf" $temp_file_name $local_compress_path >> $local_path/flag.txt
`/bin/tar -czf $temp_file_name $local_compress_path `
if [ $? -ne 0 ];
then
    echo "压缩文件:"$local_path$temp_file_name "失败,删除临时文件"
    echo $file_name",status:"$FAIL >> $local_path/flag.txt
else
    `/bin/mv $temp_file_name $file_name`
    echo "压缩文件:"$local_path$temp_file_name "成功,重命名:"$file_name
fi