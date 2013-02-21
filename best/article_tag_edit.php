<?php
//yu
require_once(dirname(__FILE__).'/config.php');
require_once(DEDEINC.'/oxwindow.class.php');
//CheckPurview('sys_Writer');
if(empty($dopost)) $dopost = '';

if(empty($alltag)) $alltag = '';
else $alltag = stripslashes($alltag);

$m_file = DEDEDATA."/admin/tag.txt";

//保存
if($dopost=="save")
{
    $fp = fopen($m_file,'w');
    flock($fp,3);
    fwrite($fp,$alltag);
    fclose($fp);
    echo "<script>alert('Save OK!');</script>";
}

//读出
if(empty($alltag) && filesize($m_file)>0)
{
    $fp = fopen($m_file,'r');
    $alltag = fread($fp,filesize($m_file));
    fclose($fp);
}
$wintitle = "标签管理";
$wecome_info = "标签管理";
$win = new OxWindow();
$win->Init('article_tag_edit.php','js/blank.js','POST');
$win->AddHidden('dopost','save');
$win->AddTitle("把标签名用半角逗号“,”分开：");
$win->AddMsgItem("<textarea name='alltag' id='alltag' style='width:100%;height:300px'>$alltag</textarea>");
$winform = $win->GetWindow('ok');
$win->Display();