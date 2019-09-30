/**
 * @description hashmap
 */
function HashMap () {
    /**
    * map大小
    */
    var size = 0;
    /**
    * 对象
    */
    var entry = new Object();//存放信息
    
            /**
     * @description 往hashmap中添加键值对
     * @param key 键 页码
     * @param value 值 
     */
    this.putvalue=function(key,value){
        if(!this.containsKey(key)){//没有包含时map大小+1
            size++;
        }
        entry[key]=value;//赋值
    }
    /**
     * @description 从hashmap中根据键获取值
     * @param key 键 页码
     * @return value|null
     */
    this.getvalue=function (key){
        return this.containsKey(key)?entry[key]:null;
    }
    /**
     * @description 判断是否包含key
     * @param key 键
     * @return true|false
     */
    this.containsKey=function (key){
        if(!(key in entry)){
            return false;
        }else{
            return true;
        }
        //return (null==(key in entry))?false:true;
    }
    /**
     * @description 从map中移除键值
     * @param key 键
     */
    this.remove=function (key){
        if(this.containsKey(key) && (delete entry[key])){
            size--;
        }
    }
    /**
     * @description 是否包含value
     * @param value 值
     */
    this.containsValue=function (value){
        for(var temp in entry){
            if(entry[temp]==value){
                return true;
            }
        }
        return false;
    }
    /**
     * @description 返回所有值
     * 
     */
    this.values=function (){
        var values = new Array();
        for(var temp in entry){
            values.push(entry[temp]);
        }
        return values;
    }
    /**
     * @description 返回所有键
     */
    this.keys=function (){
        var keys=new Array();
        for(var temp in entry){
            keys.push(temp);
        }
        return keys;
    }
    /**
     * @description 返回map大小
     */
    this.size=function (){
        return size;
    }
    /**
     * @description 清除map
     */
    this.removeAll=function (){
        size=0;
        entry=new Object();
    }
}

 
/*
-------------------------------------------------------------

 var hashMap = new HashMap();

hashMap.putvalue(0,{name:"wang",age:"12"});

hashMap.putvalue(1,{name:"wu",age:"13"});

hashMap.putvalue(2,{name:"wei",age:"14"});

hashMap.putvalue(3,{name:"wen",age:"15"});

*/