/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 18:21:1.7
*/
gx.evt.autoSkip=!1;gx.define("hregistrarfaturamentocomodato",!1,function(){var n,t,i;this.ServerClass="hregistrarfaturamentocomodato";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.refreshAndEnter=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("4","'CANCELAR'");this.addKeyListener("3","'NOVOPRODUTO'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Pessoaid=function(){try{var n=gx.util.balloon.getNew("vPESSOAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pessoaempresaid=function(){return gx.ajax.validSrvEvt("dyncall","validv_Pessoaempresaid",["gx.O.AV28PessoaEmpresaId","gx.O.AV21PessoaId"],["AV21PessoaId"]),!0};this.s152_client=function(){this.AV29SnErro=="S"&&(this.addMessage(this.AV7MsgErro),gx.fn.setCtrlProperty("JSALERT","Caption",'<script language="javascript"> '+gx.text.newline()),gx.fn.setCtrlProperty("JSALERT","Caption",gx.fn.getCtrlProperty("JSALERT","Caption")+"function GXOnloadUsr() {"+gx.text.newline()),gx.fn.setCtrlProperty("JSALERT","Caption",gx.fn.getCtrlProperty("JSALERT","Caption")+" alert ('"+gx.text.trim(this.AV7MsgErro)+"')"),gx.fn.setCtrlProperty("JSALERT","Caption",gx.fn.getCtrlProperty("JSALERT","Caption")+"}"),gx.fn.setCtrlProperty("JSALERT","Caption",gx.fn.getCtrlProperty("JSALERT","Caption")+"<\/script>"))};this.e1112a2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1412a2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1612a2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e1212a2_client=function(){this.executeServerEvent("'CANCELAR'",!1,null,!1,!1)};this.e1312a2_client=function(){this.executeServerEvent("'NOVOPRODUTO'",!0,null,!1,!1)};this.e1812a2_client=function(){this.executeServerEvent("'CALCULAR'",!0,arguments[0],!1,!1)};this.e1912a2_client=function(){this.executeServerEvent("CTLCONTADORFINAL.ISVALID",!0,arguments[0],!1,!1)};this.e2012a2_client=function(){this.executeServerEvent("CTLCONTADORINICIAL.ISVALID",!0,arguments[0],!1,!1)};this.e2212a2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,33,36,39,42,44,48,49,50,51,52,53,54,55,56,57,63,69,70,71,72,75];this.GXLastCtrlId=75;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",47,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarfaturamentocomodato",[],!1,1,!0,!0,0,!1,!1,!1,"CollComodatoFat.ComodatoFatItem",0,"px","Novo registro",!1,!1,!1,null,null,!1,"AV24Sdt",!1,[1,1,1,1]);t=this.Grid1Container;t.addSingleLineEdit("GXV11C",48,"CTLLINHA","Linha","","Linha","int",0,"px",4,4,"right",null,[],"GXV11C","GXV11C",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV11D",49,"CTLDIA","Dia","","Dia","int",0,"px",2,2,"right",null,[],"GXV11D","GXV11D",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV11E",50,"CTLCONTADORINICIAL","Contador Inicial","","ContadorInicial","int",90,"px",8,8,"right",null,[],"GXV11E","GXV11E",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV11F",51,"CTLCONTADORFINAL","Contador Final","","ContadorFinal","int",90,"px",8,8,"right",null,[],"GXV11F","GXV11F",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV11G",52,"CTLTOTALDOSES","Total de Doses","","TotalDoses","int",0,"px",8,8,"right",null,[],"GXV11G","GXV11G",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV11H",53,"CTLFORMAPGTO","Forma de Pagamento","","FormaPgto","svchar",0,"px",20,20,"left",null,[],"GXV11H","GXV11H",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV11I",54,"CTLVENCIMENTO","Vencimento","","Vencimento","date",60,"px",10,10,"right",null,[],"GXV11I","GXV11I",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpcal","vBMPCAL",55,0,"px",17,"px","e1812a2_client","","Calcular","Image","GridColumnImage");t.addSingleLineEdit("GXV11K",56,"CTLVALORCOMODATO","Valor do Boleto","","ValorComodato","decimal",100,"px",22,22,"right",null,[],"GXV11K","GXV11K",!0,2,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpexc","vBMPEXC",57,0,"px",17,"px","e1612a2_client","","Excluir","Image","GridColumnImage");this.setGrid(t);this.HDMASKDATAContainer=gx.uc.getNew(this,73,13,"HDMask","HDMASKDATAContainer","Hdmaskdata");i=this.HDMASKDATAContainer;i.setDynProp("AttachControl","Attachcontrol","","str");i.setProp("Picture","Picture","99/99/9999","str");i.setProp("Default","Default","","str");i.setProp("Version","Version","2.01","str");i.setProp("Reverse","Reverse",!1,"bool");i.setProp("Signed","Signed",!1,"bool");i.setProp("UnmaskedChars","Unmaskedchars","[(),.:/ -]","str");i.setProp("UnmaskedValue","Unmaskedvalue",!1,"bool");i.setProp("FixedChars","Fixedchars","[(),.:/ -]","str");i.setProp("GetValue","Getvalue","","char");i.setProp("ControlType","Controltype","Grid","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","","char");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={fld:"TABLE3",grid:0};n[5]={fld:"TABLE4",grid:0};n[8]={fld:"TABLE5",grid:0};n[11]={fld:"TEXTBLOCK16",format:0,grid:0};n[13]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV21PessoaId",gxold:"OV21PessoaId",gxvar:"AV21PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV21PessoaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV21PessoaId=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPESSOAID",gx.O.AV21PessoaId)},c2v:function(){gx.O.AV21PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",".")},nac:gx.falseFn};n[16]={fld:"TEXTBLOCK17",format:0,grid:0};n[18]={fld:"TABLE6",grid:0};n[21]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV22Mes",gxold:"OV22Mes",gxvar:"AV22Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22Mes=gx.num.intval(n)},v2z:function(n){gx.O.ZV22Mes=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV22Mes,0)},c2v:function(){gx.O.AV22Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",".")},nac:gx.falseFn};n[23]={fld:"TEXTBLOCK18",format:0,grid:0};n[25]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV23Ano",gxold:"OV23Ano",gxvar:"AV23Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23Ano=gx.num.intval(n)},v2z:function(n){gx.O.ZV23Ano=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV23Ano,0)},c2v:function(){gx.O.AV23Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",".")},nac:gx.falseFn};n[33]={fld:"TABLE7",grid:0};n[36]={fld:"TABLE2",grid:0};n[39]={fld:"TABLE1",grid:0};n[42]={fld:"TEXTBLOCK25",format:0,grid:0};n[44]={fld:"IMGNOVOPRODUTO",grid:0};n[48]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLINHA",gxz:"ZV54GXV11C",gxold:"OV54GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV11C=gx.num.intval(n)},v2z:function(n){gx.O.ZV54GXV11C=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLLINHA",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLLINHA",n||gx.fn.currentGridRowImpl(47),".")},nac:gx.falseFn};n[49]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLDIA",gxz:"ZV55GXV11D",gxold:"OV55GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV11D=gx.num.intval(n)},v2z:function(n){gx.O.ZV55GXV11D=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLDIA",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLDIA",n||gx.fn.currentGridRowImpl(47),".")},nac:gx.falseFn};n[50]={lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:"e2012a2_client",rgrid:[],fld:"CTLCONTADORINICIAL",gxz:"ZV56GXV11E",gxold:"OV56GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV11E=gx.num.intval(n)},v2z:function(n){gx.O.ZV56GXV11E=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLCONTADORINICIAL",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11E,0)},c2v:function(){gx.O.GXV11E=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLCONTADORINICIAL",n||gx.fn.currentGridRowImpl(47),".")},nac:gx.falseFn};n[51]={lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:"e1912a2_client",rgrid:[],fld:"CTLCONTADORFINAL",gxz:"ZV57GXV11F",gxold:"OV57GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV11F=gx.num.intval(n)},v2z:function(n){gx.O.ZV57GXV11F=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLCONTADORFINAL",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLCONTADORFINAL",n||gx.fn.currentGridRowImpl(47),".")},nac:gx.falseFn};n[52]={lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTOTALDOSES",gxz:"ZV58GXV11G",gxold:"OV58GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV11G=gx.num.intval(n)},v2z:function(n){gx.O.ZV58GXV11G=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLTOTALDOSES",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11G,0)},c2v:function(){gx.O.GXV11G=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLTOTALDOSES",n||gx.fn.currentGridRowImpl(47),".")},nac:gx.falseFn};n[53]={lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORMAPGTO",gxz:"ZV59GXV11H",gxold:"OV59GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV11H=n},v2z:function(n){gx.O.ZV59GXV11H=n},v2c:function(n){gx.fn.setGridControlValue("CTLFORMAPGTO",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLFORMAPGTO",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[54]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVENCIMENTO",gxz:"ZV60GXV11I",gxold:"OV60GXV11I",gxvar:"GXV11I",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV11I=gx.fn.toDatetimeValue(n,"Y4MD")},v2z:function(n){gx.O.ZV60GXV11I=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("CTLVENCIMENTO",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("CTLVENCIMENTO",n||gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};n[55]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAL",gxz:"ZV39BmpCal",gxold:"OV39BmpCal",gxvar:"AV39BmpCal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV39BmpCal=n},v2z:function(n){gx.O.ZV39BmpCal=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCAL",n||gx.fn.currentGridRowImpl(47),gx.O.AV39BmpCal,gx.O.AV66Bmpcal_GXI)},c2v:function(){gx.O.AV66Bmpcal_GXI=this.val_GXI();gx.O.AV39BmpCal=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCAL",n||gx.fn.currentGridRowImpl(47))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCAL_GXI",n||gx.fn.currentGridRowImpl(47))},gxvar_GXI:"AV66Bmpcal_GXI",nac:gx.falseFn};n[56]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORCOMODATO",gxz:"ZV61GXV11K",gxold:"OV61GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV11K=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV61GXV11K=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("CTLVALORCOMODATO",n||gx.fn.currentGridRowImpl(47),gx.O.GXV11K,2,",")},c2v:function(){gx.O.GXV11K=this.val()},val:function(n){return gx.fn.getGridDecimalValue("CTLVALORCOMODATO",n||gx.fn.currentGridRowImpl(47),".",",")},nac:gx.falseFn};n[57]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:47,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV35BmpExc",gxold:"OV35BmpExc",gxvar:"AV35BmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV35BmpExc=n},v2z:function(n){gx.O.ZV35BmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(47),gx.O.AV35BmpExc,gx.O.AV65Bmpexc_GXI)},c2v:function(){gx.O.AV65Bmpexc_GXI=this.val_GXI();gx.O.AV35BmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(47))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(47))},gxvar_GXI:"AV65Bmpexc_GXI",nac:gx.falseFn};n[63]={fld:"TABLE8",grid:0};n[69]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV28PessoaEmpresaId",gxold:"OV28PessoaEmpresaId",gxvar:"AV28PessoaEmpresaId",ucs:[],op:[13],ip:[13,69],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28PessoaEmpresaId=n},v2z:function(n){gx.O.ZV28PessoaEmpresaId=n},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV28PessoaEmpresaId,0)},c2v:function(){gx.O.AV28PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};n[70]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV36TpTela",gxold:"OV36TpTela",gxvar:"AV36TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36TpTela=n},v2z:function(n){gx.O.ZV36TpTela=n},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV36TpTela,0)},c2v:function(){gx.O.AV36TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};n[71]={fld:"JAVASCRIPT",format:2,grid:0};n[72]={fld:"JSALERT",format:2,grid:0};n[75]={fld:"BTNHELP",grid:0};this.AV21PessoaId=0;this.ZV21PessoaId=0;this.OV21PessoaId=0;this.AV22Mes=0;this.ZV22Mes=0;this.OV22Mes=0;this.AV23Ano=0;this.ZV23Ano=0;this.OV23Ano=0;this.ZV54GXV11C=0;this.OV54GXV11C=0;this.ZV55GXV11D=0;this.OV55GXV11D=0;this.ZV56GXV11E=0;this.OV56GXV11E=0;this.ZV57GXV11F=0;this.OV57GXV11F=0;this.ZV58GXV11G=0;this.OV58GXV11G=0;this.ZV59GXV11H="";this.OV59GXV11H="";this.ZV60GXV11I=gx.date.nullDate();this.OV60GXV11I=gx.date.nullDate();this.ZV39BmpCal="";this.OV39BmpCal="";this.ZV61GXV11K=0;this.OV61GXV11K=0;this.ZV35BmpExc="";this.OV35BmpExc="";this.AV28PessoaEmpresaId="";this.ZV28PessoaEmpresaId="";this.OV28PessoaEmpresaId="";this.AV36TpTela="";this.ZV36TpTela="";this.OV36TpTela="";this.AV21PessoaId=0;this.AV22Mes=0;this.AV23Ano=0;this.AV28PessoaEmpresaId="";this.AV36TpTela="";this.GXV11C=0;this.GXV11D=0;this.GXV11E=0;this.GXV11F=0;this.GXV11G=0;this.GXV11H="";this.GXV11I=gx.date.nullDate();this.AV39BmpCal="";this.GXV11K=0;this.AV35BmpExc="";this.A7612PedidoComodatoData=gx.date.nullDate();this.A7614PedidoComodatoClienteId=0;this.A7613PedidoComodatoClienteEmpId="";this.A7622PedidoComodatoItemPreco=0;this.A7621PedidoComodatoItemQtde=0;this.A7623PedidoComodatoId=0;this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.A7625PessoaTipoComodato="";this.A7627PessoaValorComodatoDose=0;this.A7626PessoaValorComodatoFixo=0;this.A7628PessoaQtdeMinimaDose=0;this.A7598FaturamentoComodatoClienteEmpI="";this.A7599FaturamentoComodatoClienteId=0;this.A7597FaturamentoComodatoData=gx.date.nullDate();this.A7606FaturamentoComodatoContadorFin=0;this.A7605FaturamentoComodatoContadorIni=0;this.A7607FaturamentoComodatoFormaPagto="";this.A7609FaturamentoComodatoValor=0;this.A7608FaturamentoComodatoVencimento=gx.date.nullDate();this.A7596FaturamentoComodatoId=0;this.AV7MsgErro="";this.AV29SnErro="";this.Events={e1112a2_client:["'FECHAR'",!0],e1412a2_client:["ENTER",!0],e1612a2_client:["'EXCLUIR'",!0],e1212a2_client:["'CANCELAR'",!0],e1312a2_client:["'NOVOPRODUTO'",!0],e1812a2_client:["'CALCULAR'",!0],e1912a2_client:["CTLCONTADORFINAL.ISVALID",!0],e2012a2_client:["CTLCONTADORINICIAL.ISVALID",!0],e2212a2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"},{av:"AV36TpTela",fld:"vTPTELA"}],[{av:"this.HDMASKDATAContainer.AttachControl",ctrl:"HDMASKDATA",prop:"AttachControl"},{ctrl:"BTNCANCELAR",prop:"Visible"},{ctrl:"BTNCONFIRMAR",prop:"Visible"},{ctrl:"BTNAVANCAR",prop:"Visible"},{ctrl:"BTNFECHAR",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:"vMES",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:"vANO",prop:"Enabled"},{ctrl:"vPESSOAID"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV36TpTela",fld:"vTPTELA"},{av:"AV29SnErro",fld:"vSNERRO"},{av:"A7597FaturamentoComodatoData",fld:"FATURAMENTOCOMODATODATA"},{av:"A7596FaturamentoComodatoId",fld:"FATURAMENTOCOMODATOID"},{av:"A7598FaturamentoComodatoClienteEmpI",fld:"FATURAMENTOCOMODATOCLIENTEEMPI"},{av:"AV28PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"A7599FaturamentoComodatoClienteId",fld:"FATURAMENTOCOMODATOCLIENTEID"},{av:"AV21PessoaId",fld:"vPESSOAID"},{av:"AV30DataInicial",fld:"vDATAINICIAL"},{av:"AV32DataFinal",fld:"vDATAFINAL"},{av:"A7606FaturamentoComodatoContadorFin",fld:"FATURAMENTOCOMODATOCONTADORFIN"},{av:"A7605FaturamentoComodatoContadorIni",fld:"FATURAMENTOCOMODATOCONTADORINI"},{av:"A7607FaturamentoComodatoFormaPagto",fld:"FATURAMENTOCOMODATOFORMAPAGTO"},{av:"A7609FaturamentoComodatoValor",fld:"FATURAMENTOCOMODATOVALOR"},{av:"A7608FaturamentoComodatoVencimento",fld:"FATURAMENTOCOMODATOVENCIMENTO"},{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"AV22Mes",fld:"vMES"},{av:"AV23Ano",fld:"vANO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"AV41SnConsisteValor",fld:"vSNCONSISTEVALOR"},{av:"AV46ValorBoleto",fld:"vVALORBOLETO"},{av:"AV42PessoaTipoComodato",fld:"vPESSOATIPOCOMODATO"},{av:"AV7MsgErro",fld:"vMSGERRO"},{av:"A7625PessoaTipoComodato",fld:"PESSOATIPOCOMODATO"},{av:"A7627PessoaValorComodatoDose",fld:"PESSOAVALORCOMODATODOSE"},{av:"A7626PessoaValorComodatoFixo",fld:"PESSOAVALORCOMODATOFIXO"},{av:"A7628PessoaQtdeMinimaDose",fld:"PESSOAQTDEMINIMADOSE"},{av:"AV47TotalDoses",fld:"vTOTALDOSES"},{av:"A7613PedidoComodatoClienteEmpId",fld:"PEDIDOCOMODATOCLIENTEEMPID"},{av:"A7614PedidoComodatoClienteId",fld:"PEDIDOCOMODATOCLIENTEID"},{av:"A7612PedidoComodatoData",fld:"PEDIDOCOMODATODATA"},{av:"A7621PedidoComodatoItemQtde",fld:"PEDIDOCOMODATOITEMQTDE"},{av:"A7622PedidoComodatoItemPreco",fld:"PEDIDOCOMODATOITEMPRECO"},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"}],[{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"AV19i",fld:"vI"},{av:"AV33SdtItem",fld:"vSDTITEM"},{av:"AV34j",fld:"vJ"},{av:"AV36TpTela",fld:"vTPTELA"},{av:"AV41SnConsisteValor",fld:"vSNCONSISTEVALOR"},{av:"AV68GXV2",fld:"vGXV2"},{av:"AV38Dia",fld:"vDIA"},{av:"AV31Txt",fld:"vTXT"},{av:"AV30DataInicial",fld:"vDATAINICIAL"},{av:"Gx_mode",fld:"vMODE"},{av:"AV7MsgErro",fld:"vMSGERRO"},{av:"AV29SnErro",fld:"vSNERRO"},{av:"AV71GXLvl228",fld:"vGXLVL228"},{av:"AV32DataFinal",fld:"vDATAFINAL"},{av:"AV70GXV3",fld:"vGXV3"},{av:"AV37SnDados",fld:"vSNDADOS"},{av:"AV48Data",fld:"vDATA"},{av:"AV47TotalDoses",fld:"vTOTALDOSES"},{av:"AV21PessoaId",fld:"vPESSOAID"},{av:'gx.fn.getCtrlProperty("JSALERT","Caption")',ctrl:"JSALERT",prop:"Caption"},{av:"AV42PessoaTipoComodato",fld:"vPESSOATIPOCOMODATO"},{av:"AV43PessoaValorComodatoDose",fld:"vPESSOAVALORCOMODATODOSE"},{av:"AV44PessoaValorComodatoFixo",fld:"vPESSOAVALORCOMODATOFIXO"},{av:"AV45PessoaQtdeMinimaDose",fld:"vPESSOAQTDEMINIMADOSE"},{av:"AV46ValorBoleto",fld:"vVALORBOLETO"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"Gx_date",fld:"vTODAY"},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"},{av:"AV36TpTela",fld:"vTPTELA"}],[{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"AV19i",fld:"vI"},{av:"AV72GXV4",fld:"vGXV4"},{av:"AV33SdtItem",fld:"vSDTITEM"}]];this.EvtParms["'CANCELAR'"]=[[{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"},{av:"AV36TpTela",fld:"vTPTELA"}],[{av:"AV21PessoaId",fld:"vPESSOAID"},{av:"AV36TpTela",fld:"vTPTELA"},{av:"AV24Sdt",fld:"vSDT",grid:47}]];this.EvtParms["'NOVOPRODUTO'"]=[[{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"},{av:"AV36TpTela",fld:"vTPTELA"}],[{av:"AV33SdtItem",fld:"vSDTITEM"},{av:"AV24Sdt",fld:"vSDT",grid:47}]];this.EvtParms["'CALCULAR'"]=[[{av:"AV29SnErro",fld:"vSNERRO"},{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"AV46ValorBoleto",fld:"vVALORBOLETO"},{av:"AV22Mes",fld:"vMES"},{av:"AV23Ano",fld:"vANO"},{av:"AV30DataInicial",fld:"vDATAINICIAL"},{av:"AV41SnConsisteValor",fld:"vSNCONSISTEVALOR"},{av:"AV42PessoaTipoComodato",fld:"vPESSOATIPOCOMODATO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV28PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"AV21PessoaId",fld:"vPESSOAID"},{av:"A7625PessoaTipoComodato",fld:"PESSOATIPOCOMODATO"},{av:"A7627PessoaValorComodatoDose",fld:"PESSOAVALORCOMODATODOSE"},{av:"A7626PessoaValorComodatoFixo",fld:"PESSOAVALORCOMODATOFIXO"},{av:"A7628PessoaQtdeMinimaDose",fld:"PESSOAQTDEMINIMADOSE"},{av:"AV47TotalDoses",fld:"vTOTALDOSES"},{av:"A7613PedidoComodatoClienteEmpId",fld:"PEDIDOCOMODATOCLIENTEEMPID"},{av:"A7614PedidoComodatoClienteId",fld:"PEDIDOCOMODATOCLIENTEID"},{av:"A7612PedidoComodatoData",fld:"PEDIDOCOMODATODATA"},{av:"A7621PedidoComodatoItemQtde",fld:"PEDIDOCOMODATOITEMQTDE"},{av:"A7622PedidoComodatoItemPreco",fld:"PEDIDOCOMODATOITEMPRECO"},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"},{av:"AV36TpTela",fld:"vTPTELA"}],[{av:"AV41SnConsisteValor",fld:"vSNCONSISTEVALOR"},{av:"AV48Data",fld:"vDATA"},{av:"AV47TotalDoses",fld:"vTOTALDOSES"},{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"AV29SnErro",fld:"vSNERRO"},{av:"AV70GXV3",fld:"vGXV3"},{av:"AV33SdtItem",fld:"vSDTITEM"},{av:"AV37SnDados",fld:"vSNDADOS"},{av:"AV7MsgErro",fld:"vMSGERRO"},{av:"AV31Txt",fld:"vTXT"},{av:"AV30DataInicial",fld:"vDATAINICIAL"},{av:"AV32DataFinal",fld:"vDATAFINAL"},{av:"AV38Dia",fld:"vDIA"},{av:"AV42PessoaTipoComodato",fld:"vPESSOATIPOCOMODATO"},{av:"AV43PessoaValorComodatoDose",fld:"vPESSOAVALORCOMODATODOSE"},{av:"AV44PessoaValorComodatoFixo",fld:"vPESSOAVALORCOMODATOFIXO"},{av:"AV45PessoaQtdeMinimaDose",fld:"vPESSOAQTDEMINIMADOSE"},{av:"AV46ValorBoleto",fld:"vVALORBOLETO"}]];this.EvtParms["CTLCONTADORFINAL.ISVALID"]=[[{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"},{av:"AV36TpTela",fld:"vTPTELA"}],[{av:"AV24Sdt",fld:"vSDT",grid:47}]];this.EvtParms["CTLCONTADORINICIAL.ISVALID"]=[[{av:"AV24Sdt",fld:"vSDT",grid:47},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV35BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:"AV39BmpCal",fld:"vBMPCAL"},{av:'gx.fn.getCtrlProperty("vBMPCAL","Tooltiptext")',ctrl:"vBMPCAL",prop:"Tooltiptext"},{av:"AV36TpTela",fld:"vTPTELA"}],[{av:"AV24Sdt",fld:"vSDT",grid:47}]];this.EnterCtrl=["BTNAVANCAR","BTNCONFIRMAR"];t.addRefreshingVar({rfrVar:"AV35BmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV35BmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV35BmpExc",rfrProp:"Jsonclick",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV39BmpCal",rfrProp:"Value",gxAttId:"Bmpcal"});t.addRefreshingVar({rfrVar:"AV39BmpCal",rfrProp:"Tooltiptext",gxAttId:"Bmpcal"});t.addRefreshingVar(this.GXValidFnc[70]);this.addGridBCProperty("Sdt",["Linha"],this.GXValidFnc[48],"AV24Sdt");this.addGridBCProperty("Sdt",["Dia"],this.GXValidFnc[49],"AV24Sdt");this.addGridBCProperty("Sdt",["ContadorInicial"],this.GXValidFnc[50],"AV24Sdt");this.addGridBCProperty("Sdt",["ContadorFinal"],this.GXValidFnc[51],"AV24Sdt");this.addGridBCProperty("Sdt",["TotalDoses"],this.GXValidFnc[52],"AV24Sdt");this.addGridBCProperty("Sdt",["FormaPgto"],this.GXValidFnc[53],"AV24Sdt");this.addGridBCProperty("Sdt",["Vencimento"],this.GXValidFnc[54],"AV24Sdt");this.addGridBCProperty("Sdt",["ValorComodato"],this.GXValidFnc[56],"AV24Sdt");this.InitStandaloneVars()});gx.setParentObj(new hregistrarfaturamentocomodato)